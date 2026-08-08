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

export const submitContact = asyncHandler(async (req, res: Response) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const contact = await Contact.create({ name, email, message });

  // Email notification — don't let a mail failure break the API response
  try {
    await transporter.sendMail({
      from: `"Insight Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `New contact message from ${name}`,
      text: message,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
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