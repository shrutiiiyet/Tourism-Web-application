import React from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";

const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

const TravelMateCard = ({ mate }) => {
  const isCustom = mate.isCustom;

  return (
    <div
      className={`relative shadow-lg rounded-2xl p-6 transition-transform hover:scale-105 ${
        isCustom
          ? "bg-blue-900/20 border border-blue-300 text-white"
          : "bg-black/20 text-white"
      }`}
    >
      {/* Experience Tag */}
      <span
        className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold text-white ${
          mate.experience === "first-timer"
            ? "bg-yellow-500"
            : mate.experience === "certified"
            ? "bg-blue-500"
            : "bg-green-600"
        }`}
      >
        {mate.experience === "first-timer"
          ? "First-Time"
          : mate.experience === "certified"
          ? "Certified"
          : "Experienced"}
      </span>

      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-blue-600 text-white font-bold flex items-center justify-center">
          {getInitials(mate.name)}
        </div>
        <div>
          <h3 className="text-lg font-bold">{mate.name}</h3>
          <p className="text-sm text-gray-300">
            {mate.age} • {mate.location}
          </p>
        </div>
      </div>

      {/* Bio */}
      <p className="italic text-sm text-gray-200 mb-4">"{mate.bio}"</p>

      {/* Info */}
      <div className="text-sm text-gray-100 space-y-1 mb-4">
        <p><strong>Destination:</strong> {mate.destination}</p>
        <p><strong>Style:</strong> {mate.travelStyle}</p>
        <p><strong>Duration:</strong> {mate.duration}</p>
        <p><strong>Group:</strong> {mate.groupSize}</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-4">
        <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 hover:scale-105 transition">
          <FaEnvelope /> Connect
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 hover:scale-105 transition">
          <FaUser /> Profile
        </button>
      </div>
    </div>
  );
};

export default TravelMateCard;