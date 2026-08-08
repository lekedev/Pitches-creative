import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import authRoutes from "./routes/authRoutes";
import insightRoutes from "./routes/insightRoutes";
import contactRoutes from "./routes/contactRoutes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());

app.use(
  "/api",
  rateLimit({ windowMs: 15 * 60 * 1000, max: 200 })
);

app.use("/api/auth", authRoutes);
app.use("/api/insights", insightRoutes);
app.use("/api/contact", contactRoutes);

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.use(errorHandler);

export default app;