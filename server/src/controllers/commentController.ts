import { Response } from "express";
import Comment from "../models/Comment";
import Insight from "../models/Insight";
import { asyncHandler } from "../utils/asyncHandler";
import { AuthRequest } from "../middleware/auth";

export const getComments = asyncHandler(async (req, res: Response) => {
  const comments = await Comment.find({ insight: req.params.insightId }).sort({ createdAt: -1 });
  res.json(comments);
});

export const createComment = asyncHandler(async (req, res: Response) => {
  const insight = await Insight.findById(req.params.insightId);
  if (!insight) return res.status(404).json({ message: "Insight not found" });
  if (!insight.enableComments) {
    return res.status(403).json({ message: "Comments are disabled for this post" });
  }

  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ message: "Name and message are required" });
  }

  const comment = await Comment.create({ insight: insight._id, name, message });
  res.status(201).json(comment);
});

// Admin: moderate — delete any comment
export const deleteComment = asyncHandler(async (req: AuthRequest, res: Response) => {
  const comment = await Comment.findById(req.params.id);
  if (!comment) return res.status(404).json({ message: "Comment not found" });
  await comment.deleteOne();
  res.json({ message: "Comment deleted" });
});