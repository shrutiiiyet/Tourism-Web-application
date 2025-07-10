// FindTravelMate.jsx
import React, { useState } from "react";
import TravelMateCard from "./TravelMateCard";
import SearchFilterSection from "./SearchFilterSection";
import AddMateModal from "./AddMateModal";
import travelMates from "./MatesData";

const FindTravelMate2 = () => {
  const [destination, setDestination] = useState("");
  const [tripDuration, setTripDuration] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [filteredMates, setFilteredMates] = useState(travelMates);
  const [showModal, setShowModal] = useState(false);
  const [newMate, setNewMate] = useState({
    name: "",
    age: "",
    location: "",
    destination: "",
    travelStyle: "",
    duration: "",
    groupSize: "",
    experience: "",
    bio: "",
  });

  const handleApplyFilters = () => {
    const filtered = travelMates.filter((mate) => {
      const inAgeGroup =
        ageGroup === "" ||
        (ageGroup === "18-25" && mate.age >= 18 && mate.age <= 25) ||
        (ageGroup === "26-35" && mate.age >= 26 && mate.age <= 35) ||
        (ageGroup === "36-45" && mate.age >= 36 && mate.age <= 45);
      return (
        (!destination || mate.destination === destination) &&
        (!tripDuration || mate.duration === tripDuration) &&
        (!groupSize || mate.groupSize === groupSize) &&
        inAgeGroup
      );
    });
    setFilteredMates(filtered);
  };

  const handleReset = () => {
    setDestination("");
    setTripDuration("");
    setGroupSize("");
    setAgeGroup("");
    setFilteredMates(travelMates);
  };

  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-[#000814] via-[#003049] to-[#001d3d] text-white font-sans relative">
      {/* Header + Filters */}
      <SearchFilterSection
        destination={destination}
        setDestination={setDestination}
        tripDuration={tripDuration}
        setTripDuration={setTripDuration}
        groupSize={groupSize}
        setGroupSize={setGroupSize}
        ageGroup={ageGroup}
        setAgeGroup={setAgeGroup}
        handleApplyFilters={handleApplyFilters}
        handleReset={handleReset}
      />

      {/* Add Plan Button */}
      <div className="max-w-6xl mx-auto flex justify-end mt-2 mb-5">
        <button
          className="px-6 py-2 rounded-xl bg-blue-500/50 text-white font-semibold hover:scale-105 transition text-base shadow"
          onClick={() => setShowModal(true)}
        >
          + Add My Plan
        </button>
      </div>

      {/* Travel Mate Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredMates.length > 0 ? (
          filteredMates.map((mate, idx) => <TravelMateCard key={idx} mate={mate} />)
        ) : (
          <div className="col-span-full text-center text-white text-lg font-medium">No matches found.</div>
        )}
      </div>

      {/* Modal */}
      <AddMateModal
        showModal={showModal}
        newMate={newMate}
        setNewMate={setNewMate}
        filteredMates={filteredMates}
        setFilteredMates={setFilteredMates}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default FindTravelMate2;