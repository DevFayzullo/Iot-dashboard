import React, { useEffect, useState } from "react";
import SensorCard from "./SensorCard";
import tempIcon from "../assets/temp-icon.svg";
import humidIcon from "../assets/humidity-icon.svg";
import doorIcon from "../assets/door-icon.svg";
import lightIcon from "../assets/light-icon.svg";
import axios from "axios";

const Dashboard = () => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [doorData, setDoorData] = useState([]);
  const [lightData, setLightData] = useState([]);

  const fetchData = async () => {
    try {
      const tempRes = await axios.get("http://localhost:3001/api/temperature");
      const doorRes = await axios.get("http://localhost:3001/api/door");
      const lightRes = await axios.get("http://localhost:3001/api/light");

      setTemperatureData(tempRes.data);
      setDoorData(doorRes.data);
      setLightData(lightRes.data);
    } catch (err) {
      console.error("Data fetch error:", err);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">📡 IoT Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {temperatureData.map((sensor) => (
          <SensorCard
            key={sensor.s_id + "-temp"}
            icon={tempIcon}
            label={`Sensor ${sensor.s_id} - Temp`}
            value={`${sensor.s_temperature} °C`}
          />
        ))}
        {temperatureData.map((sensor) => (
          <SensorCard
            key={sensor.s_id + "-humid"}
            icon={humidIcon}
            label={`Sensor ${sensor.s_id} - Humidity`}
            value={`${sensor.s_humidity} %`}
          />
        ))}
        {doorData.map((sensor) => (
          <SensorCard
            key={sensor.s_id + "-door"}
            icon={doorIcon}
            label={`Door ${sensor.s_id}`}
            value={sensor.s_status}
          />
        ))}
        {lightData.map((sensor) => (
          <SensorCard
            key={sensor.s_id + "-light"}
            icon={lightIcon}
            label={`Light ${sensor.s_id}`}
            value={sensor.s_status}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
