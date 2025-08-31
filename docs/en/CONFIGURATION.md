# ⚙️ Configuration

## 1) Environment Variables (.env Example)

> Only include `backend/.env.example` in submission (remove passwords)

```env
PORT=3001
DB_USER=your_user
DB_PASSWORD=********
DB_HOST=postgres-smartboy.h.aivencloud.com
DB_PORT=26207
DB_NAME=kafolat
DB_SSL=true
JWT_SECRET=your_jwt_secret     # For login sessions
CORS_ORIGIN=http://localhost:5173
```

---

## 2) Database Connection (backend/config/db.js)

- Use `pg`’s `Pool`, load from `.env`
- SSL recommended:
  ```js
  ssl: {
    rejectUnauthorized: false;
  }
  ```
- Recommended to limit connection pool size (e.g., `max: 10`)

---

## 3) Styling (TailwindCSS)

- `src/index.css`:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- `tailwind.config.js`: Add `darkMode: 'class'` option if needed

---

## 4) Vite Development Server

- Default port: 5173
- If proxy is not used → frontend directly calls `http://localhost:3001`
- Proxy example (`vite.config.js`):
  ```js
  server: {
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
  ```

---

## 5) Security & Deployment Checklist

- Do not commit `.env` to Git
- Use least-privilege DB account, enable SSL
- **CORS settings**: In production, allow only specific domains
- **JWT/Session secret key** should be a strong random value
- **Helmet / Rate limiting** recommended for Express security
- Frontend build:
  ```bash
  npm run build
  ```
  → Generates `/dist`, deploy using nginx or other static server

---

## 6) Docker (Optional)

- When writing `Dockerfile` and `docker-compose.yml`:
  - Can run `backend` + `postgres` containers together
  - Inject `.env` environment variables from compose file

---

✅ With this configuration, the project can run reliably in both local development and production environments.
