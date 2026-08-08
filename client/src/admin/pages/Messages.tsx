import { useEffect, useState } from "react";
import api from "../api/client";

interface Contact {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function Messages() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    api.get("/contact").then(({ data }) => setContacts(data));
  }, []);

  return (
    <div>
      <h2>Contact Messages</h2>
      {contacts.map((c) => (
        <div key={c._id} style={{ borderBottom: "1px solid #ccc", padding: "12px 0" }}>
          <strong>{c.name}</strong> — {c.email}
          <p>{c.message}</p>
          <small>{new Date(c.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}