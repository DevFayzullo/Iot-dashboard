import React, { useEffect, useState } from "react";
import SensorCard from "./SensorCard";
import tempIcon from "../assets/temp-icon.svg";
import humidIcon from "../assets/humidity-icon.svg";
import doorIcon from "../assets/door-icon.svg";
import lightIcon from "../assets/light-icon.svg";
import api from "../lib/api";

const Dashboard = () => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [doorData, setDoorData] = useState([]);
  const [lightData, setLightData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatedAt, setUpdatedAt] = useState(null);

  const fetchData = async () => {
    try {
      setError("");
      const [t, d, l] = await Promise.all([
        api.get("/api/temperature"),
        api.get("/api/door"),
        api.get("/api/light"),
      ]);
      setTemperatureData(t.data || []);
      setDoorData(d.data || []);
      setLightData(l.data || []);
      setUpdatedAt(new Date());
    } catch (err) {
      console.error("Data fetch error:", err);
      setError("Failed to load sensor data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const id = setInterval(fetchData, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-600 via-sky-600 to-cyan-500">
      <div className="pointer-events-none absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[38rem] w-[38rem] rounded-full bg-black/10 blur-3xl" />

      <header className="sticky top-0 z-10 backdrop-blur-xl bg-white/10 ring-1 ring-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <h1 className="text-white font-semibold tracking-tight text-xl sm:text-2xl flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </span>
            IoT Dashboard
          </h1>
          <div className="flex items-center gap-3 text-white/80 text-sm">
            {updatedAt && (
              <span className="hidden sm:inline">
                Last update: {updatedAt.toLocaleTimeString()}
              </span>
            )}
            <button
              onClick={fetchData}
              className="rounded-lg bg-white/15 px-3 py-1.5 ring-1 ring-white/20 hover:bg-white/20 transition">
              Refresh
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6">
        {error && (
          <div className="mb-4 rounded-2xl border border-red-400/30 bg-red-500/10 text-red-100 px-4 py-3 backdrop-blur">
            {error}
          </div>
        )}

        {loading ? (
          <SkeletonGrid />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {temperatureData.map((s) => (
              <SensorCard
                key={s.s_id + "-temp"}
                icon={tempIcon}
                label={`Sensor ${s.s_id} — Temp`}
                value={`${Number(s.s_temperature).toFixed(2)} °C`}
                tone="indigo"
              />
            ))}
            {temperatureData.map((s) => (
              <SensorCard
                key={s.s_id + "-humid"}
                icon={humidIcon}
                label={`Sensor ${s.s_id} — Humidity`}
                value={`${Number(s.s_humidity).toFixed(2)} %`}
                tone="sky"
              />
            ))}
            {doorData.map((s) => (
              <SensorCard
                key={s.s_id + "-door"}
                icon={doorIcon}
                label={`Door ${s.s_id}`}
                value={String(s.s_status)}
                kind="status"
              />
            ))}
            {lightData.map((s) => (
              <SensorCard
                key={s.s_id + "-light"}
                icon={lightIcon}
                label={`Light ${s.s_id}`}
                value={String(s.s_status)}
                kind="status"
              />
            ))}
          </div>
        )}
      </main>

      <footer className="py-6">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-center gap-2 text-[11px] text-white/90">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-1 backdrop-blur ring-1 ring-white/20">
            Secure environment
          </span>
          <span>•</span>
          <span>v1.0.0</span>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;

function SkeletonGrid() {
  const Item = () => (
    <div className="animate-pulse rounded-2xl bg-white/15 ring-1 ring-white/10 backdrop-blur-xl p-5 h-36" />
  );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: 6 }).map((_, i) => (
        <Item key={i} />
      ))}
    </div>
  );
}
