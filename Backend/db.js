import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const db = new Database(path.join(__dirname, "guestbook.db"));

db.pragma("journal_mode = WAL");

// Single table — deliberately minimal. No users table since we only
// have one hardcoded admin (see routes/auth.js).
db.exec(`
  CREATE TABLE IF NOT EXISTS guestbook_entries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )
`);

export default db;
