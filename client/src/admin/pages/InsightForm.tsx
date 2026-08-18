import { useState, useEffect, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/client";

const CATEGORIES = [
  "Brand Strategy",
  "Visual Design",
  "Web Development",
  "Marketing",
  "Business Growth",
];

export default function InsightForm() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [tagsInput, setTagsInput] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [existingImageUrl, setExistingImageUrl] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [enableSharing, setEnableSharing] = useState(true);
  const [enableComments, setEnableComments] = useState(true);
  const [enableLikes, setEnableLikes] = useState(true);

  useEffect(() => {
    if (!isEdit) return;
    api.get(`/insights/admin/${id}`).then(({ data }) => {
      setTitle(data.title);
      setExcerpt(data.excerpt);
      setContent(data.content);
      setCategory(data.category || CATEGORIES[0]);
      setTagsInput((data.tags || []).join(", "));
      setExistingImageUrl(data.coverImage?.url || "");
      setEnableSharing(data.enableSharing ?? true);
      setEnableComments(data.enableComments ?? true);
      setEnableLikes(data.enableLikes ?? true);
    });
  }, [id]);

  const submit = async (e: FormEvent, publish: boolean) => {
    e.preventDefault();
    setError("");
    setSaving(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("excerpt", excerpt);
    formData.append("content", content);
    formData.append("category", category);
    formData.append(
      "tags",
      JSON.stringify(tagsInput.split(",").map((t) => t.trim()).filter(Boolean))
    );
    formData.append("published", String(publish));
    if (coverImage) formData.append("coverImage", coverImage);
    formData.append("enableSharing", String(enableSharing));
    formData.append("enableComments", String(enableComments));
    formData.append("enableLikes", String(enableLikes));

    try {
      if (isEdit) {
        await api.put(`/insights/${id}`, formData);
      } else {
        await api.post(`/insights`, formData);
      }
      navigate("/admin/dashboard");
    } catch {
      setError("Something went wrong saving this insight. Check required fields and try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-[Aspekta] text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-medium">
            {isEdit ? "Edit Insight" : "New Insight"}
          </h1>
          <div className="flex gap-3">
            <button
              onClick={(e) => submit(e, false)}
              disabled={saving}
              className="rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black disabled:opacity-50"
            >
              Save as Draft
            </button>
            <button
              onClick={(e) => submit(e, true)}
              disabled={saving}
              className="rounded-full bg-[#FFC24F] px-5 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Publish"}
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
          {/* Main content column */}
          <div className="flex flex-col gap-5">
            <input
              placeholder="Post Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full border-none bg-transparent text-3xl font-medium text-white placeholder-white/30 outline-none"
            />

            <textarea
              placeholder="Write a brief summary..."
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              required
              rows={2}
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white placeholder-white/30 outline-none focus:border-[#FFC24F]/50"
            />

            <textarea
              placeholder="Write your insight in Markdown... (use **bold**, *italic*, ## headings, - lists, [link](url))"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={18}
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 font-mono text-sm text-white placeholder-white/30 outline-none focus:border-[#FFC24F]/50"
            />
          </div>

          {/* Sidebar: Post Settings */}
          <aside className="flex flex-col gap-6 rounded-xl border border-white/10 bg-white/5 p-5 h-fit">
            <h3 className="text-sm font-medium text-white/70">Post Settings</h3>

            <div>
              <label className="mb-2 block text-xs text-white/50">Featured Image</label>
              {existingImageUrl && !coverImage && (
                <img
                  src={existingImageUrl}
                  alt="Current cover"
                  className="mb-2 h-32 w-full rounded-lg object-cover"
                />
              )}
              <label className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-white/20 text-xs text-white/40 hover:border-[#FFC24F]/50">
                {coverImage ? coverImage.name : "Click to upload"}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setCoverImage(e.target.files?.[0] || null)}
                />
              </label>
            </div>

            <div>
              <label className="mb-2 block text-xs text-white/50">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-[#0a0a0a] px-3 py-2 text-sm text-white outline-none"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs text-white/50">Tags (comma separated)</label>
              <input
                placeholder="branding, strategy"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-[#0a0a0a] px-3 py-2 text-sm text-white placeholder-white/30 outline-none"
              />
              <div className="flex flex-col gap-3 border-t border-white/10 pt-4">
  {[
    { label: "Enable Sharing", value: enableSharing, set: setEnableSharing },
    { label: "Enable Comments", value: enableComments, set: setEnableComments },
    { label: "Enable Likes", value: enableLikes, set: setEnableLikes },
  ].map(({ label, value, set }) => (
    <label key={label} className="flex items-center justify-between text-sm text-white/70">
      {label}
      <button
        type="button"
        onClick={() => set(!value)}
        className={`h-5 w-9 rounded-full transition-colors ${value ? "bg-[#FFC24F]" : "bg-white/20"}`}
      >
        <span
          className={`block h-4 w-4 rounded-full bg-white transition-transform ${
            value ? "translate-x-4" : "translate-x-0.5"
          }`}
        />
      </button>
        </label>
      ))}
    </div>
                </div>
          </aside>
        </div>
      </div>
    </div>
  );
}