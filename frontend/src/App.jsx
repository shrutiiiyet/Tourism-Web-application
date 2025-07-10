import {  Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import SidebarMenu from "./component/Profile/SidebarMenu";
import FindTravelMate from "./component/Travel-mate/FindTravelMate";
import TravelProfilePage from "./component/Profile/TravelProfilePage";
import TravelFriendsPage from "./component/FriendsPage/TravelFriendsPage";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
      />

      {/* Main Content */}
      <div className={`${sidebarVisible ? "ml-56" : ""} min-h-screen bg-gray-100 transition-all duration-300`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />

          {isLoggedIn && (
            <>
              <Route
                path="/find-travel-mate"
                element={<FindTravelMate />}
              />
              <Route path="/profile" element={<TravelProfilePage />} />
              <Route path="/friends" element={<TravelFriendsPage />} />
            </>
          )}
        </Routes>
      </div>

      {/* Sidebar */}
      {/* {sidebarVisible && (
        <div className="fixed top-0 left-0 z-50">
          <SidebarMenu />
        </div>
      )} */}

    </>
  );
}

export default App;