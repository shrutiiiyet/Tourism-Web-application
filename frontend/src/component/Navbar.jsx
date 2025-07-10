import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPlaneDeparture, FaBars } from "react-icons/fa";
import SidebarMenu from "./Profile/SidebarMenu";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const sidebarRef = useRef();

  const toggleSidebar = (e) => {
    e.stopPropagation();
    setSidebarVisible((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setSidebarVisible(false);
    }
  };

  useEffect(() => {
    if (sidebarVisible) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [sidebarVisible]);

  return (
    <>
      {/* Top Navbar */}
      <div className="sticky top-0 z-50">
        <div className="flex justify-between items-center px-6 py-3 bg-[#001f3f] text-white shadow-md">
          <Link to="/" className="flex items-center gap-2 text-3xl font-bold">
            <FaPlaneDeparture className="text-green-400" />
            Trekker
          </Link>

          {!isLoggedIn && (
            <div className="flex items-center gap-4 text-lg">
              <button
                onClick={() => navigate("/signin")}
                className="bg-transparent border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="bg-green-500 px-4 py-1 rounded-full text-white font-semibold hover:scale-105 transition"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="relative z-40">
        <div className="flex justify-center items-center gap-10 px-6 py-2 bg-[#004d40]/90 text-white text-lg font-semibold shadow-md relative">
          {/* Hamburger Icon */}
          {isLoggedIn && (
            <div className="absolute left-6">
              <button onClick={toggleSidebar}>
                <FaBars className="text-2xl hover:text-green-300 transition" />
              </button>
            </div>
          )}

          {/* Center nav items */}
          <div className="flex gap-10">
            <Link to="/" className="hover:text-green-300 transition">
              Explore
            </Link>
            <Link to="/destinations" className="hover:text-green-300 transition">
              Destinations
            </Link>
            <Link to="/offers" className="hover:text-green-300 transition">
              Offers
            </Link>
            {isLoggedIn && (
              <Link to="/find-travel-mate" className="hover:text-green-300 transition">
                Find Travel Mate
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div ref={sidebarRef}>
        <SidebarMenu visible={sidebarVisible} />
      </div>
    </>
  );
};

export default Navbar;