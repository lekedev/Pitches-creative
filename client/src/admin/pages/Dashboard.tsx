import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/client";

interface Insight {
  _id: string;
  title: string;
  slug: string;
  category: string;
  published: boolean;
  createdAt: string;
}

export default function Dashboard() {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchInsights = async () => {
    setLoading(true);
    const { data } = await api.get("/insights/admin/all");
    setInsights(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchInsights();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this insight? This cannot be undone.")) return;
    await api.delete(`/insights/${id}`);
    fetchInsights();
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-[Aspekta] text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-medium">Insights</h1>
          <div className="flex gap-3">
            <Link
              to="/admin/messages"
              className="rounded-full border border-white/30 px-5 py-2 text-sm text-white transition-all hover:scale-[1.03] active:scale-95 hover:bg-white hover:text-black"
            >
              Messages
            </Link>
            <Link
              to="/admin/insights/new"
              className="rounded-full bg-[#FFC24F] px-5 py-2 text-sm font-medium text-black transition-all hover:scale-[1.03] active:scale-95 hover:opacity-90"
            >
              + New Insight
            </Link>
          </div>
        </div>

        {loading ? (
          <p className="text-white/50">Loading...</p>
        ) : insights.length === 0 ? (
          <p className="text-white/50">No insights yet. Create your first one.</p>
        ) : (
          <div className="overflow-hidden rounded-xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-white/50">
                <tr>
                  <th className="px-4 py-3 font-normal">Title</th>
                  <th className="px-4 py-3 font-normal">Category</th>
                  <th className="px-4 py-3 font-normal">Status</th>
                  <th className="px-4 py-3 font-normal">Created</th>
                  <th className="px-4 py-3 font-normal"></th>
                </tr>
              </thead>
              <tbody>
                {insights.map((i) => (
                  <tr key={i._id} className="border-t border-white/10">
                    <td className="px-4 py-3">{i.title}</td>
                    <td className="px-4 py-3 text-white/60">{i.category}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2 py-1 text-xs ${
                          i.published
                            ? "bg-green-500/15 text-green-400"
                            : "bg-white/10 text-white/50"
                        }`}
                      >
                        {i.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-white/50">
                      {new Date(i.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        to={`/admin/insights/${i._id}/edit`}
                        className="mr-4 text-[#FFC24F] transition-all duration-200 hover:scale-[1.03] active:scale-95 hover:underline"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(i._id)}
                        className="text-red-400 transition-all duration-200 hover:scale-[1.03] active:scale-95 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}