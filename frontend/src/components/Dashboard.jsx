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
  const [error, setError] = useState("");

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
    } catch (err) {
      console.error("Data fetch error:", err);
      setError("Failed to load sensor data.");
    }
  };

  useEffect(() => {
    fetchData();
    const id = setInterval(fetchData, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">📡 IoT Dashboard</h1>

      {error && (
        <div className="mx-auto max-w-3xl mb-4 rounded-xl bg-red-50 text-red-700 border border-red-200 px-4 py-2 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {temperatureData.map((sensor) => (
          <SensorCard
            key={sensor.s_id + "-temp"}
            icon={tempIcon}
            label={`Sensor ${sensor.s_id} - Temp`}
            value={`${Number(sensor.s_temperature).toFixed(2)} °C`}
          />
        ))}
        {temperatureData.map((sensor) => (
          <SensorCard
            key={sensor.s_id + "-humid"}
            icon={humidIcon}
            label={`Sensor ${sensor.s_id} - Humidity`}
            value={`${Number(sensor.s_humidity).toFixed(2)} %`}
          />
        ))}
        {doorData.map((sensor) => (
          <SensorCard
            key={sensor.s_id + "-door"}
            icon={doorIcon}
            label={`Door ${sensor.s_id}`}
            value={String(sensor.s_status).toLowerCase()}
          />
        ))}
        {lightData.map((sensor) => (
          <SensorCard
            key={sensor.s_id + "-light"}
            icon={lightIcon}
            label={`Light ${sensor.s_id}`}
            value={String(sensor.s_status).toLowerCase()}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
