import { Router } from "express";
import {
  getInsights,
  getInsightBySlug,
  createInsight,
  updateInsight,
  deleteInsight,
  getAllInsightsAdmin,
  getInsightByIdAdmin,
} from "../controllers/insightController";
import { protect } from "../middleware/auth";
import { upload } from "../middleware/upload";

const router = Router();

router.get("/", getInsights);
router.get("/:slug", getInsightBySlug);

router.post("/", protect, upload.single("coverImage"), createInsight);
router.put("/:id", protect, upload.single("coverImage"), updateInsight);
router.delete("/:id", protect, deleteInsight);
router.get("/admin/all", protect, getAllInsightsAdmin);
router.get("/admin/:id", protect, getInsightByIdAdmin);

export default router;