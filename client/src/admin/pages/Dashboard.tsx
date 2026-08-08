import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/client";

interface Insight {
  _id: string;
  title: string;
  slug: string;
  published: boolean;
  createdAt: string;
}

export default function Dashboard() {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchInsights = async () => {
    setLoading(true);

    const { data } = await api.get("/insights/admin/all"); // note: this returns all insights including drafts
    setInsights(data);
    setLoading(false);
  };

  useEffect(() => {
    const loadInsights = async () => {
      await fetchInsights();
    };

    void loadInsights();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this insight?")) return;
    await api.delete(`/insights/${id}`);
    fetchInsights();
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Insights</h2>
        <Link to="/admin/insights/new">+ New Insight</Link>
      </div>
      <table width="100%">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {insights.map((i) => (
            <tr key={i._id}>
              <td>{i.title}</td>
              <td>{i.published ? "Published" : "Draft"}</td>
              <td>{new Date(i.createdAt).toLocaleDateString()}</td>
              <td>
                <Link to={`/admin/insights/${i._id}/edit`}>Edit</Link>{" "}
                <button onClick={() => handleDelete(i._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}