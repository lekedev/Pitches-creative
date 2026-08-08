import { Response } from "express";
import Insight from "../models/Insight";
import cloudinary from "../config/cloudinary";
import { asyncHandler } from "../utils/asyncHandler";
import { AuthRequest } from "../middleware/auth";

const slugify = (title: string) =>
  title.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

// Public
export const getInsights = asyncHandler(async (req, res: Response) => {
  const insights = await Insight.find({ published: true }).sort({ createdAt: -1 });
  res.json(insights);
});

export const getInsightBySlug = asyncHandler(async (req, res: Response) => {
  const insight = await Insight.findOne({ slug: req.params.slug, published: true });
  if (!insight) return res.status(404).json({ message: "Insight not found" });
  res.json(insight);
});

// Admin
export const createInsight = asyncHandler(async (req: AuthRequest, res: Response) => {
  const { title, excerpt, content, tags, published } = req.body;

  const insight = await Insight.create({
    title,
    slug: slugify(title),
    excerpt,
    content,
    tags: tags ? JSON.parse(tags) : [],
    published: published !== "false",
      coverImage: (req as any).file
        ? { url: ((req as any).file as any).path, publicId: ((req as any).file as any).filename }
        : undefined,
  });

  res.status(201).json(insight);
});

export const updateInsight = asyncHandler(async (req: AuthRequest, res: Response) => {
  const insight = await Insight.findById(req.params.id);
  if (!insight) return res.status(404).json({ message: "Insight not found" });

  const { title, excerpt, content, tags, published } = req.body;

  if (title) {
    insight.title = title;
    insight.slug = slugify(title);
  }
  if (excerpt) insight.excerpt = excerpt;
  if (content) insight.content = content;
  if (tags) insight.tags = JSON.parse(tags);
  if (published !== undefined) insight.published = published !== "false";

  if ((req as any).file) {
    if (insight.coverImage?.publicId) {
      await cloudinary.uploader.destroy(insight.coverImage.publicId);
    }
    insight.coverImage = { url: ((req as any).file as any).path, publicId: ((req as any).file as any).filename };
  }

  await insight.save();
  res.json(insight);
});

export const deleteInsight = asyncHandler(async (req: AuthRequest, res: Response) => {
  const insight = await Insight.findById(req.params.id);
  if (!insight) return res.status(404).json({ message: "Insight not found" });

  if (insight.coverImage?.publicId) {
    await cloudinary.uploader.destroy(insight.coverImage.publicId);
  }
  await insight.deleteOne();
  res.json({ message: "Insight deleted" });
});

// Admin: get ALL insights including drafts
export const getAllInsightsAdmin = asyncHandler(async (req: AuthRequest, res: Response) => {
  const insights = await Insight.find().sort({ createdAt: -1 });
  res.json(insights);
});
// Admin: get insight by ID
export const getInsightByIdAdmin = asyncHandler(async (req: AuthRequest, res: Response) => {
  const insight = await Insight.findById(req.params.id);
  if (!insight) return res.status(404).json({ message: "Insight not found" });
  res.json(insight);
});