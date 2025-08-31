# 🧩 Modularization & Folder Structure

## Folder Structure

```
iot-dashboard/
├─ backend/
│  ├─ config/db.js                  # DB connection settings (PostgreSQL, etc.)
│  ├─ controllers/temperatureController.js   # Temperature sensor data handling
│  ├─ controllers/doorController.js          # Door sensor data handling
│  ├─ controllers/lightController.js         # Light sensor data handling
│  ├─ routes/apiRoutes.js           # API route definitions
│  ├─ server.js                     # Express server entry point
│  ├─ package.json                  # Backend dependency management
│  └─ .env.example                  # Example environment variables file (actual passwords removed)

├─ frontend/
│  ├─ src/components/Login.jsx      # Login component
│  ├─ src/components/Dashboard.jsx  # Main dashboard screen
│  ├─ src/components/SensorCard.jsx # Sensor status display card UI
│  ├─ App.jsx                       # React app structure
│  ├─ main.jsx                      # React DOM rendering entry point
│  ├─ index.css                     # Global CSS styles
│  ├─ tailwind.config.js            # TailwindCSS configuration
│  ├─ vite.config.js                # Vite build configuration
│  ├─ package.json                  # Frontend dependency management
│  └─ public/logo.svg               # Project logo image

├─ docs/
│  ├─ README_ko.md                  # Project overview and usage guide (Korean)
│  ├─ CONFIGURATION_ko.md           # Environment setup guide
│  ├─ MODULES_ko.md                 # Module descriptions
│  ├─ API_SPEC_ko.md                # API specification
│  ├─ IoT_Dashboard_Presentation.pptx   # Presentation slides
│  ├─ IoT_Dashboard_Documentation.pdf   # Final documentation report
│  ├─ architecture_diagram.png      # Full architecture diagram
│  └─ api_flow.png                  # API request/response flow diagram

└─ .gitignore                       # Git ignore settings
```

## Main Modules

- **backend/config/db.js** — Database connection (Pool)
- **backend/controllers/** — Business logic (temperature/door/light)
- **backend/routes/apiRoutes.js** — Route definitions
- **backend/server.js** — App bootstrap
- **frontend/src/components/** — UI components (Login, Dashboard, SensorCard)

## Dependencies / Flow Diagram

- Architecture: `architecture_diagram.png`
- API Flow: `api_flow.png`

**Flow Summary**

1. `Dashboard.jsx` → Calls `/api/*` via Axios
2. `routes/apiRoutes.js` → Connects to controller
3. Controller → Executes SQL through Pool in `config/db.js`
4. PostgreSQL results (JSON) → Returned to frontend
