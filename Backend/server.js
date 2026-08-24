import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

import guestbookRoutes from "./routes/guestbook.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// --- CORS ---
// Only allow requests from origins listed in CORS_ORIGIN (comma-separated)
const allowedOrigins = (process.env.CORS_ORIGIN || "")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow tools like curl/Postman with no origin header
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      callback(new Error("Not allowed by CORS"));
    },
  })
);

app.use(express.json());

// --- Rate limiting on writes (guestbook posting + login attempts) ---
const writeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 20,
  message: { error: "Too many requests, please try again later" },
});
app.use("/api/guestbook", (req, res, next) => {
  if (req.method === "POST") return writeLimiter(req, res, next);
  next();
});
app.use("/api/auth", writeLimiter);

// --- Routes ---
app.use("/api/guestbook", guestbookRoutes);
app.use("/api/auth", authRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
