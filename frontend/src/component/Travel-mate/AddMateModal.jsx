import React from "react";

const AddMateModal = ({ showModal, newMate, setNewMate, setFilteredMates, filteredMates, setShowModal }) => {
  if (!showModal) return null;

  const handleUpload = () => {
    const customMate = {
      ...newMate,
      age: Number(newMate.age),
      isCustom: true,
    };
    setFilteredMates([customMate, ...filteredMates]);
    setShowModal(false);
    setNewMate({
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
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white/10 p-8 rounded-2xl w-full max-w-md text-white shadow-xl">
        <h2 className="text-xl font-bold mb-4">Add Your Travel Plan</h2>
        <div className="space-y-3">
          {["name", "age", "location", "destination", "bio"].map((field) => (
            <input
              key={field}
              type={field === "age" ? "number" : "text"}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="w-full p-2 rounded-xl backdrop-blur-sm bg-gray-700/50 placeholder:text-gray-300"
              value={newMate[field]}
              onChange={(e) => setNewMate({ ...newMate, [field]: e.target.value })}
            />
          ))}

          {[
            { key: "travelStyle", options: ["Adventure", "Relaxation", "Cultural", "Nature", "Luxury"] },
            { key: "duration", options: ["Weekend", "1 Week", "1 Month"] },
            { key: "groupSize", options: ["solo", "small", "medium", "large"] },
            { key: "experience", options: ["first-timer", "experienced", "certified"] },
          ].map(({ key, options }) => (
            <select
              key={key}
              className="w-full p-2 rounded-xl backdrop-blur-sm bg-gray-700/50 text-white"
              value={newMate[key]}
              onChange={(e) => setNewMate({ ...newMate, [key]: e.target.value })}
            >
              <option value="">{key.charAt(0).toUpperCase() + key.slice(1)}</option>
              {options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button className="px-4 py-2 bg-green-500/50 rounded-xl hover:scale-105 transition" onClick={handleUpload}>
            Upload
          </button>
          <button className="px-4 py-2 bg-white/30 text-white rounded-xl hover:scale-105 transition" onClick={() => setShowModal(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMateModal;