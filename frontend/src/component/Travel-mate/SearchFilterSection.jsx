import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchFilterSection = ({
  destination,
  tripDuration,
  groupSize,
  ageGroup,
  setDestination,
  setTripDuration,
  setGroupSize,
  setAgeGroup,
  handleApplyFilters,
  handleReset,
}) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        Discover Your Next{" "}
        <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
          Adventure Partner
        </span>
      </h1>
      <p className="mt-4 text-lg max-w-xl mx-auto">
        Connect with like-minded travelers, share incredible experiences, and create memories that last a lifetime.
      </p>

      {/* Search Bar */}
      <div className="mt-6 flex flex-col md:flex-row justify-center gap-4 items-center">
        <input
          type="text"
          placeholder="Where do you want to go? (e.g., Tokyo, Bali...)"
          className="px-5 py-3 w-full max-w-md text-white rounded-full bg-black/30 shadow focus:outline-none focus:ring-4 ring-green-400 placeholder:text-gray-300"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <button
          className="px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          onClick={handleApplyFilters}
        >
          <FaSearch className="inline mr-2" /> Find Matches
        </button>
      </div>

      {/* Filters */}
      <div className="text-xl font-semibold text-white mb-4 text-center mt-5">Filters</div>
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-lg max-w-5xl mx-auto mb-10">
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2 text-white">Destination</label>
            <select className="w-full p-3 rounded-xl bg-white/20 text-white" value={destination} onChange={(e) => setDestination(e.target.value)}>
              <option value="">Any Destination</option>
              <option value="Tokyo">Tokyo</option>
              <option value="Bali">Bali</option>
              <option value="Iceland">Iceland</option>
              <option value="Nepal">Nepal</option>
              <option value="Patagonia">Patagonia</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-white">Trip Duration</label>
            <select className="w-full p-3 rounded-xl bg-white/20 text-white" value={tripDuration} onChange={(e) => setTripDuration(e.target.value)}>
              <option value="">Any Duration</option>
              <option value="Weekend">Weekend</option>
              <option value="1 Week">1 Week</option>
              <option value="1 Month">1 Month</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-white">Group Size</label>
            <select className="w-full p-3 rounded-xl bg-white/20 text-white" value={groupSize} onChange={(e) => setGroupSize(e.target.value)}>
              <option value="">Any Size</option>
              <option value="solo">Solo</option>
              <option value="small">2-4 people</option>
              <option value="medium">5-8 people</option>
              <option value="large">9+ people</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-white">Age Group</label>
            <select className="w-full p-3 rounded-xl bg-white/20 text-white" value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)}>
              <option value="">Any Age</option>
              <option value="18-25">18 - 25</option>
              <option value="26-35">26 - 35</option>
              <option value="36-45">36 - 45</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <button
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold hover:scale-105 transition"
            onClick={handleApplyFilters}
          >
            Apply Filters
          </button>
          <button
            className="px-6 py-2 rounded-xl bg-white/20 text-white font-semibold hover:scale-105 transition"
            onClick={handleReset}
          >
            Reset All
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterSection;