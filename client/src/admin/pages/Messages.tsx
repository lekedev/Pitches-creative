import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/client";
import { serviceOptions } from "../../data/services";

interface Contact {
  _id: string;
  name: string;
  email: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
  createdAt: string;
}

const serviceLabel = (value?: string) => serviceOptions.find((o) => o.value === value)?.label ?? "—";

export default function Messages() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get<Contact[]>("/contact")
      .then(({ data }) => setContacts(data))
      .catch(() => setError("Couldn't load enquiries. Check you're signed in and the API is reachable."));
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-10 flex items-center justify-between">
          <h1 className="text-3xl tracking-[-0.02em]">Enquiries</h1>
          <Link to="/admin/dashboard" className="text-sm text-stone hover:text-ink">
            ← Dashboard
          </Link>
        </div>

        {error && <p className="text-ember-deep">{error}</p>}
        {!error && contacts.length === 0 && <p className="text-stone">No enquiries yet.</p>}

        <ul className="border-t border-line">
          {contacts.map((c) => (
            <li key={c._id} className="border-b border-line py-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="font-medium">
                  {c.name}{" "}
                  <a href={`mailto:${c.email}`} className="font-normal text-stone underline underline-offset-4">
                    {c.email}
                  </a>
                </p>
                <time className="text-sm text-stone">{new Date(c.createdAt).toLocaleString("en-GB")}</time>
              </div>
              <dl className="mt-3 flex flex-wrap gap-x-8 gap-y-1 text-sm">
                <div><dt className="inline text-stone">Company: </dt><dd className="inline">{c.company || "—"}</dd></div>
                <div><dt className="inline text-stone">Service: </dt><dd className="inline">{serviceLabel(c.service)}</dd></div>
                <div><dt className="inline text-stone">Budget: </dt><dd className="inline">{c.budget || "—"}</dd></div>
              </dl>
              <p className="mt-4 whitespace-pre-wrap leading-relaxed">{c.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
