import axios from "axios";

export interface Enquiry {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  /** Honeypot: real visitors never see or fill this. */
  website: string;
}

/**
 * Sends an enquiry to the Express API (POST {VITE_API_URL}/contact), which
 * stores it in MongoDB and emails the admin. See DEPLOYMENT.md.
 */
export async function submitEnquiry(enquiry: Enquiry): Promise<void> {
  const baseURL = import.meta.env.VITE_API_URL;
  if (!baseURL) {
    throw new Error("VITE_API_URL is not configured — the contact form cannot send.");
  }
  await axios.post(`${baseURL.replace(/\/$/, "")}/contact`, enquiry, { timeout: 15000 });
}
