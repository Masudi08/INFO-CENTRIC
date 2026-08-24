const API_URL = import.meta.env.VITE_API_URL;

export async function fetchEntries() {
  const res = await fetch(`${API_URL}/api/guestbook`);
  if (!res.ok) throw new Error("Failed to load guestbook entries");
  return res.json();
}

export async function addEntry(name, message) {
  const res = await fetch(`${API_URL}/api/guestbook`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, message }),
  });
  if (!res.ok) throw new Error((await res.json()).error);
  return res.json();
}

// token comes from AuthContext after admin login
export async function deleteEntry(id, token) {
  const res = await fetch(`${API_URL}/api/guestbook/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error((await res.json()).error);
}

export async function login(username, password) {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) throw new Error((await res.json()).error);
  return res.json(); // { token }
}