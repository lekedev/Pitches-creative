import { Router } from "express";
import {
  getInsights,
  getInsightBySlug,
  getAllInsightsAdmin,
  getInsightByIdAdmin,
  createInsight,
  updateInsight,
  deleteInsight,
} from "../controllers/insightController";
import { protect } from "../middleware/auth";
import { upload } from "../middleware/upload";
import { likeInsight } from "../controllers/insightController";


const router = Router();

// Public
router.get("/", getInsights);
router.get("/:slug", getInsightBySlug);

// Admin (specific paths BEFORE the public /:slug catch, order matters)
router.get("/admin/all", protect, getAllInsightsAdmin);
router.get("/admin/:id", protect, getInsightByIdAdmin);
router.post("/", protect, upload.single("coverImage"), createInsight);
router.put("/:id", protect, upload.single("coverImage"), updateInsight);
router.delete("/:id", protect, deleteInsight);

router.post("/:id/like", likeInsight); // public

export default router;