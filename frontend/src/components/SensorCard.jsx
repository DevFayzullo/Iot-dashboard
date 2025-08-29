import React from "react";

const SensorCard = ({ icon, label, value }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-xl transition">
      <img src={icon} alt={label} className="w-12 h-12 mb-2" />
      <p className="text-gray-600 text-sm font-medium">{label}</p>
      <h2 className="text-xl font-bold text-gray-800">{value}</h2>
    </div>
  );
};

export default SensorCard;
