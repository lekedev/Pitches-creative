import { Router } from "express";
import { getComments, createComment, deleteComment } from "../controllers/commentController";
import { protect } from "../middleware/auth";

const router = Router();

router.get("/:insightId", getComments);       // public: read comments for a post
router.post("/:insightId", createComment);    // public: submit a comment
router.delete("/:id", protect, deleteComment); // admin: moderate/remove

export default router;