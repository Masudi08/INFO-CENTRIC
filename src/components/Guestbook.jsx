import { useState, useEffect } from "react";
import { fetchEntries, addEntry, deleteEntry } from "../api/guestbook";

import { useAuth } from "../context/AuthContext";
import styles from "./Guestbook.module.css";

function Guestbook() {
  const { token, isAuthenticated } = useAuth();

  const [entries, setEntries] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    loadEntries();
  }, []);

  async function loadEntries() {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchEntries();
      setEntries(data);
    } catch (err) {
      setError("Couldn't load the guestbook. Try refreshing.");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      setError("Name and message can't be empty.");
      return;
    }

    try {
      setSubmitting(true);
      setError(null);
      const newEntry = await addEntry(name, message);
      setEntries((prev) => [newEntry, ...prev]);
      setName("");
      setMessage("");
    } catch (err) {
      setError(err.message || "Couldn't post your entry. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id) {
    try {
      setDeletingId(id);
      setError(null);
      await deleteEntry(id, token);
      setEntries((prev) => prev.filter((entry) => entry.id !== id));
    } catch (err) {
      setError(err.message || "Couldn't delete that entry.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className={styles.body}>
      <section className={styles.guestbook}>
        <h2 className={styles.heading}>Guestbook</h2>
        <p className={styles.subheading}>
          Leave a note — it'll stay up for future visitors to see.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={50}
            className={styles.input}
            disabled={submitting}
          />
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={500}
            rows={3}
            className={styles.textarea}
            disabled={submitting}
          />
          <button type="submit" className={styles.button} disabled={submitting}>
           {submitting ? "Posting…" : "Sign the guestbook"}
          </button>
        </form>

        {error && <p className={styles.error}>{error}</p>}

        {loading ? (
          <p className={styles.status}>Loading entries…</p>
        ) : entries.length === 0 ? (
          <p className={styles.status}>No entries yet — be the first to sign.</p>
        ) : (
          <ul className={styles.entryList}>
            {entries.map((entry) => (
              <li key={entry.id} className={styles.entry}>
                <div className={styles.entryHeader}>
                  <span className={styles.entryName}>{entry.name}</span>
                  <span className={styles.entryDate}>
                    {new Date(entry.created_at).toLocaleDateString()}
                  </span>
                </div>
                <p className={styles.entryMessage}>{entry.message}</p>

                {isAuthenticated && (
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDelete(entry.id)}
                    disabled={deletingId === entry.id}
                  >
                    {deletingId === entry.id ? "Deleting…" : "Delete"}
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default Guestbook;
