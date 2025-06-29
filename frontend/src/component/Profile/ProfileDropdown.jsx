import React, { useState, useRef, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Icon */}
      <div
        className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center cursor-pointer text-white"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FaUser />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white text-black rounded-xl shadow-lg z-50">
          <Link
            to="/profile"
            className="block px-4 py-2 hover:bg-gray-100 rounded-t-xl"
            onClick={() => setIsOpen(false)}
          >
            Profile
          </Link>
          <Link
            to="/plan"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Current Plan
          </Link>
          <Link
            to="/friends"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Friends
          </Link>
          <Link
            to="/settings"
            className="block px-4 py-2 hover:bg-gray-100 rounded-b-xl"
            onClick={() => setIsOpen(false)}
          >
            Settings
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;

