import { Router } from "express";
import { submitContact, getContacts } from "../controllers/contactController";
import { protect } from "../middleware/auth";

const router = Router();
router.post("/", submitContact);
router.get("/", protect, getContacts);
export default router;