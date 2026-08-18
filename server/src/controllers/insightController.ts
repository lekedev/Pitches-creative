import { Response } from "express";
import Insight from "../models/Insight";
import { asyncHandler } from "../utils/asyncHandler";
import { AuthRequest } from "../middleware/auth";

const slugify = (title: string) =>
  title.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

// ---- Public ----
export const getInsights = asyncHandler(async (req, res: Response) => {
  const insights = await Insight.find({ published: true }).sort({ createdAt: -1 });
  res.json(insights);
});

export const getInsightBySlug = asyncHandler(async (req, res: Response) => {
  const insight = await Insight.findOne({ slug: req.params.slug, published: true });
  if (!insight) return res.status(404).json({ message: "Insight not found" });
  res.json(insight);
});

// ---- Admin ----
export const getAllInsightsAdmin = asyncHandler(async (req: AuthRequest, res: Response) => {
  const insights = await Insight.find().sort({ createdAt: -1 });
  res.json(insights);
});

export const getInsightByIdAdmin = asyncHandler(async (req: AuthRequest, res: Response) => {
  const insight = await Insight.findById(req.params.id);
  if (!insight) return res.status(404).json({ message: "Insight not found" });
  res.json(insight);
});

export const createInsight = asyncHandler(async (req: AuthRequest, res: Response) => {
  const { title, excerpt, content, category, tags, published, author } = req.body;

  if (!title || !excerpt || !content || !category) {
    return res.status(400).json({ message: "Title, excerpt, content, and category are required" });
  }
  if (enableSharing !== undefined) insight.enableSharing = enableSharing !== "false";
  if (enableComments !== undefined) insight.enableComments = enableComments !== "false";
  if (enableLikes !== undefined) insight.enableLikes = enableLikes !== "false";

  // updateInsight — add:
  if (enableSharing !== undefined) insight.enableSharing = enableSharing !== "false";
  if (enableComments !== undefined) insight.enableComments = enableComments !== "false";
  if (enableLikes !== undefined) insight.enableLikes = enableLikes !== "false";

  const insight = await Insight.create({
    title,
    slug: slugify(title),
    excerpt,
    content,
    category,
    author: author || "Pitches Creative",
    tags: tags ? JSON.parse(tags) : [],
    published: published !== "false",
    coverImage: req.file
      ? { url: (req.file as any).location, publicId: (req.file as any).key }
      : undefined,
  });

  res.status(201).json(insight);
});

export const updateInsight = asyncHandler(async (req: AuthRequest, res: Response) => {
  const insight = await Insight.findById(req.params.id);
  if (!insight) return res.status(404).json({ message: "Insight not found" });

  const { title, excerpt, content, category, tags, published, author } = req.body;

  if (title) {
    insight.title = title;
    insight.slug = slugify(title);
  }
  if (excerpt) insight.excerpt = excerpt;
  if (content) insight.content = content;
  if (category) insight.category = category;
  if (author) insight.author = author;
  if (tags) insight.tags = JSON.parse(tags);
  if (published !== undefined) insight.published = published !== "false";

  if (req.file) {
    // Old image cleanup happens via S3 DeleteObjectCommand, wired in once your AWS credentials are live
    insight.coverImage = { url: (req.file as any).location, publicId: (req.file as any).key };
  }

  await insight.save();
  res.json(insight);
});

export const deleteInsight = asyncHandler(async (req: AuthRequest, res: Response) => {
  const insight = await Insight.findById(req.params.id);
  if (!insight) return res.status(404).json({ message: "Insight not found" });

  await insight.deleteOne();
  res.json({ message: "Insight deleted" });
});

export const likeInsight = asyncHandler(async (req, res: Response) => {
  const insight = await Insight.findById(req.params.id);
  if (!insight) return res.status(404).json({ message: "Insight not found" });
  if (!insight.enableLikes) {
    return res.status(403).json({ message: "Likes are disabled for this post" });
  }

  insight.likes += 1;
  await insight.save();
  res.json({ likes: insight.likes });
});