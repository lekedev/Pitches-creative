import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/client";

export default function InsightForm() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(true);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [existingImageUrl, setExistingImageUrl] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isEdit) {
      api.get(`/insights/admin/${id}`).then(({ data }) => {
        setTitle(data.title);
        setExcerpt(data.excerpt);
        setContent(data.content);
        setPublished(data.published);
        setExistingImageUrl(data.coverImage?.url || "");
      });
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("excerpt", excerpt);
    formData.append("content", content);
    formData.append("published", String(published));
    if (coverImage) formData.append("coverImage", coverImage);

    try {
      if (isEdit) {
        await api.put(`/insights/${id}`, formData);
      } else {
        await api.post(`/insights`, formData);
      }
      navigate("/admin/dashboard");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isEdit ? "Edit Insight" : "New Insight"}</h2>

      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Excerpt" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} required />
      <textarea
        placeholder="Content (markdown or HTML)"
        rows={12}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      {existingImageUrl && !coverImage && (
        <img src={existingImageUrl} alt="Current cover" width={200} />
      )}
      <input type="file" accept="image/*" onChange={(e) => setCoverImage(e.target.files?.[0] || null)} />

      <label>
        <input type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} />
        Published
      </label>

      <button type="submit" disabled={saving}>
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
}