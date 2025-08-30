# 📡 IoT Dashboard (React + Node.js + PostgreSQL)

This project is a **full-stack IoT dashboard** that visualizes sensor data:

- 🌡️ Temperature & Humidity
- 🚪 Door status (locked/unlocked)
- 💡 Light status (on/off)

---

## 🚀 Tech Stack

- **Frontend**: React (Vite) + Tailwind CSS
- **Backend**: Node.js (Express)
- **Database**: PostgreSQL (Aiven Cloud)
- **Communication**: Axios (HTTP requests, JSON response)

---

## ⚙️ Features

- 🔐 Login page (demo: `admin` / `1234`)
- 📊 Dashboard with responsive sensor cards
- 🌗 Modern UI with Tailwind CSS
- 🔁 Real-time data fetch from PostgreSQL
- 📱 Fully responsive (mobile & desktop)

---

## 📂 Project Structure

```
iot-dashboard/
├─ backend/             # Node.js + Express + PostgreSQL
│  ├─ config/           # db.js (DB connection via Pool)
│  ├─ controllers/      # Business logic (temperature, door, light)
│  ├─ routes/           # API routes
│  ├─ server.js         # Express server bootstrap
│  └─ .env.example      # Example environment config
├─ frontend/            # React + Tailwind
│  ├─ public/           # logo.svg
│  ├─ src/              # components, App.jsx, main.jsx, index.css
│  └─ tailwind.config.js, vite.config.js, postcss.config.js
└─ docs/                # Documentation, diagrams, slides, report
```

---

## 🛠️ Installation & Run

### 1) Backend

```bash
cd backend
npm install
node server.js
# Server runs on http://localhost:3001
```

### 2) Frontend

```bash
cd frontend
npm install
npm run dev
# App runs on http://localhost:5173
```

---

## 🔑 Demo Login

- **ID:** `admin`
- **PW:** `1234`

---

## 📘 Documentation

- [Korean Documentation (README_ko.md)](docs/README_ko.md)
- `docs/CONFIGURATION_ko.md` — Configuration guide
- `docs/MODULES_ko.md` — Modules & architecture
- `docs/API_SPEC_ko.md` — API specification
- `docs/IoT_Dashboard_Presentation.pptx` — Presentation slides
- `docs/IoT_Dashboard_Documentation.pdf` — Report (PDF)

---

## 📊 Diagrams

- **Architecture:** `docs/architecture_diagram.png`
- **API Flow:** `docs/api_flow.png`

---

## 📜 License

MIT License — feel free to use this project for learning and development.
