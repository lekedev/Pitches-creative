import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  content: string;
  coverImage: string;
  date: string;
  author: string;
  category: string;
  likes: number;
  enableSharing: boolean;
  enableComments: boolean;
  enableLikes: boolean;
}


export interface Comment {
  _id: string;
  name: string;
  message: string;
  createdAt: string;
}

interface RawInsight {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: { url: string; publicId: string };
  category: string;
  author: string;
  tags: string[];
  createdAt: string;
}

const FALLBACK_IMAGE = "/insight/insight.jpeg";

const mapInsight = (raw: RawInsight): Post => ({
  id: raw._id,
  slug: raw.slug,
  title: raw.title,
  excerpt: raw.excerpt,
  description: raw.excerpt,
  coverImage: raw.coverImage?.url || FALLBACK_IMAGE,
  date: new Date(raw.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }),
  author: raw.author || "Pitches Creative",
  category: raw.category,
   content: raw.content,
  likes: raw.likes ?? 0,
  enableSharing: raw.enableSharing ?? true,
  enableComments: raw.enableComments ?? true,
  enableLikes: raw.enableLikes ?? true,
});

export const getInsights = async (): Promise<Post[]> => {
  const { data } = await api.get<RawInsight[]>("/insights");
  return data.map(mapInsight);
};

export const getInsightBySlug = async (slug: string): Promise<Post> => {
  const { data } = await api.get<RawInsight>(`/insights/${slug}`);
  return mapInsight(data);
};

export const getCategories = (posts: Post[]): string[] =>
  Array.from(new Set(posts.map((p) => p.category)));

export const likeInsight = async (id: string): Promise<number> => {
  const { data } = await api.post(`/insights/${id}/like`);
  return data.likes;
};

export const getComments = async (insightId: string): Promise<Comment[]> => {
  const { data } = await api.get(`/comments/${insightId}`);
  return data;
};

export const postComment = async (insightId: string, name: string, message: string) => {
  const { data } = await api.post(`/comments/${insightId}`, { name, message });
  return data;
};