import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPlaneDeparture } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useAuth } from "../context/Authcontext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user , logout } = useAuth();


  return (
    <div className="sticky top-0 z-50">
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-6 py-3 bg-[#001f3f] text-white shadow-md">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <FaPlaneDeparture className="text-green-400" />
          Trekker
        </Link>

        {!user ? (
          <div className="flex items-center gap-4 text-sm">
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
        ) : 
            <div className="flex items-center gap-4 text-sm">
            <button
              onClick={() => { logout() ;  navigate("/")} }
              className="bg-transparent border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition"
            >
             LogOut
            </button>
            <button
              onClick={() => navigate("/Dashboard")}
              className="text-3xl px-4 py-1 rounded-full text-white font-semibold hover:scale-105 transition"
            >
              <CgProfile />
            </button>
          </div>
          }
      </div>

        <div className="flex justify-center gap-10 px-6 py-2 bg-[#004d40]/90 text-white text-sm font-semibold shadow-md">
          <Link to="/" className="hover:text-green-300 transition">Experience</Link>
          <Link to="/destinations" className="hover:text-green-300 transition">Destinations</Link>
          <Link to="/offers" className="hover:text-green-300 transition">Offers</Link>
          <Link to="/find-travel-mate" className="hover:text-green-300 transition">Find Travel Mate</Link>
        </div>
   
    </div>
  );
};

export default Navbar;
