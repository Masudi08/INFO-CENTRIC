# navbar-practice-backend

Guestbook + admin auth backend for the `navbar-practice` project. Built with
Express, SQLite (`better-sqlite3`), and JWT.

## Endpoints

| Method | Route                | Auth   | Description                    |
|--------|-----------------------|--------|--------------------------------|
| GET    | `/api/guestbook`      | none   | List all entries               |
| POST   | `/api/guestbook`      | none   | Add a new entry                |
| DELETE | `/api/guestbook/:id`  | admin  | Delete an entry                |
| POST   | `/api/auth/login`     | none   | Log in, returns a JWT          |
| GET    | `/api/health`         | none   | Health check                   |

## Setup (Day 1)

```bash
npm install
cp .env.example .env
```

Then edit `.env`:

- `CORS_ORIGIN` — set to your Vite dev URL (`http://localhost:5173`) and
  later add your deployed Vercel URL, comma-separated.
- `JWT_SECRET` — any long random string, e.g. run `openssl rand -hex 32`.
- `ADMIN_USERNAME` — pick whatever you want.
- `ADMIN_PASSWORD_HASH` — generate this, don't put a plain password in `.env`:

```bash
node -e "console.log(require('bcryptjs').hashSync('yourpassword', 10))"
```

Paste the output into `ADMIN_PASSWORD_HASH`.

## Run it

```bash
npm run dev
```

Server starts on `http://localhost:5000`. Test with curl before touching
the frontend:

```bash
curl http://localhost:5000/api/health
curl -X POST http://localhost:5000/api/guestbook \
  -H "Content-Type: application/json" \
  -d '{"name":"Masudi","message":"Testing the API"}'
curl http://localhost:5000/api/guestbook
```

## Frontend integration (Day 3)

In your Vite React app, set `VITE_API_URL=http://localhost:5000` in a
`.env` file, then:

```jsx
const API_URL = import.meta.env.VITE_API_URL;

async function fetchEntries() {
  const res = await fetch(`${API_URL}/api/guestbook`);
  return res.json();
}

async function addEntry(name, message) {
  const res = await fetch(`${API_URL}/api/guestbook`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, message }),
  });
  if (!res.ok) throw new Error((await res.json()).error);
  return res.json();
}
```

For the admin login + delete flow, reuse your `AuthContext` pattern from
E-Voucher: call `/api/auth/login`, store the returned token, then send it
as `Authorization: Bearer <token>` on the `DELETE` request.

## Deploy (Day 6)

Render or Railway both work well for this size of project. Notes:

- SQLite files can be wiped on redeploy on some free-tier hosts since the
  filesystem isn't persistent — if you want the guestbook data to survive
  redeploys, switch `db.js` to a hosted Postgres (e.g. Supabase free tier)
  instead. For a learning project SQLite is fine as-is.
- Set the same environment variables from `.env` in your host's dashboard.
- Update `CORS_ORIGIN` to include your deployed frontend URL.
- Update `VITE_API_URL` in your frontend's deployment env to point at the
  deployed backend URL.
