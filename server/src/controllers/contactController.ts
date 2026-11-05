import { Response } from "express";
import Contact from "../models/Contact";
import { asyncHandler } from "../utils/asyncHandler";
import { AuthRequest } from "../middleware/auth";

type MailTransporter = {
  sendMail: (options: {
    from: string;
    to: string | undefined;
    replyTo: string;
    subject: string;
    text: string;
    html: string;
  }) => Promise<unknown>;
};

let transporter: MailTransporter;

try {
  const mailerModule = require("../config/mailer") as { transporter?: MailTransporter };
  transporter = mailerModule.transporter ?? {
    sendMail: async () => undefined,
  };
} catch (error) {
  console.warn("Mailer config not found, contact emails will be skipped:", error);
  transporter = {
    sendMail: async () => undefined,
  };
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SERVICE_LABELS: Record<string, string> = {
  "digital-experiences": "Digital Experiences",
  "software-technology": "Software & Technology",
  "creative-media": "Creative & Media",
  "growth-support": "Growth & Support",
  "not-sure": "Not sure yet",
};

/** Escape user input before placing it in the notification email's HTML. */
const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]!);

const str = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");

export const submitContact = asyncHandler(async (req, res: Response) => {
  // Honeypot: the hidden "website" field is only ever filled by bots. Pretend
  // success so they don't retry, but store and send nothing.
  if (str(req.body?.website, 200)) {
    return res.status(201).json({ message: "Message received" });
  }

  const name = str(req.body?.name, 120);
  const email = str(req.body?.email, 200);
  const company = str(req.body?.company, 160);
  const service = str(req.body?.service, 60);
  const budget = str(req.body?.budget, 80);
  const message = str(req.body?.message, 5000);

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, email and message are required" });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ message: "Please provide a valid email address" });
  }
  if (service && !SERVICE_LABELS[service]) {
    return res.status(400).json({ message: "Unknown service" });
  }

  const contact = await Contact.create({ name, email, company, service, budget, message });

  const serviceLabel = service ? SERVICE_LABELS[service] : "—";
  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Company / brand", company || "—"],
    ["Service", serviceLabel],
    ["Budget", budget || "—"],
  ];

  // Email notification — don't let a mail failure break the API response
  try {
    await transporter.sendMail({
      from: `"The Stable Company website" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name.replace(/[\r\n]+/g, " ")} — ${serviceLabel}`,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${message}`,
      html:
        rows.map(([k, v]) => `<p><strong>${k}:</strong> ${escapeHtml(v)}</p>`).join("") +
        `<p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    });
  } catch (err) {
    console.error("Failed to send contact notification email:", err);
  }

  res.status(201).json({ message: "Message received", id: contact._id });
});

// Admin: view submissions
export const getContacts = asyncHandler(async (req: AuthRequest, res: Response) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.json(contacts);
});