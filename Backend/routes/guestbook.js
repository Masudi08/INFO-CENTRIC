import { Router } from "express";
import db from "../db.js";
import { requireAdmin } from "../middleware/auth.js";

const router = Router();

// GET /api/guestbook — list all entries, newest first
router.get("/", (req, res) => {
  const entries = db
    .prepare("SELECT * FROM guestbook_entries ORDER BY id DESC")
    .all();
  res.json(entries);
});

// POST /api/guestbook — add a new entry (public, anyone can sign)
router.post("/", (req, res) => {
  const { name, message } = req.body;

  if (!name?.trim() || !message?.trim()) {
    return res.status(400).json({ error: "Name and message are required" });
  }
  if (name.length > 50) {
    return res.status(400).json({ error: "Name must be 50 characters or fewer" });
  }
  if (message.length > 500) {
    return res.status(400).json({ error: "Message must be 500 characters or fewer" });
  }

  const stmt = db.prepare(
    "INSERT INTO guestbook_entries (name, message) VALUES (?, ?)"
  );
  const result = stmt.run(name.trim(), message.trim());

  const newEntry = db
    .prepare("SELECT * FROM guestbook_entries WHERE id = ?")
    .get(result.lastInsertRowid);

  res.status(201).json(newEntry);
});

// DELETE /api/guestbook/:id — admin only
router.delete("/:id", requireAdmin, (req, res) => {
  const { id } = req.params;

  const existing = db
    .prepare("SELECT id FROM guestbook_entries WHERE id = ?")
    .get(id);

  if (!existing) {
    return res.status(404).json({ error: "Entry not found" });
  }

  db.prepare("DELETE FROM guestbook_entries WHERE id = ?").run(id);
  res.status(204).send();
});

export default router;
