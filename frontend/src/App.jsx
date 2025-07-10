import {  Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./component/Navbar"; 
import Home from "./component/Home";
import SidebarMenu from "./component/Profile/SidebarMenu";
import FindTravelMate from "./component/FindTravelMate"; 
import TravelProfilePage from "./component/Profile/TravelProfilePage";
import TravelFriendsPage from "./component/FriendsPage/TravelFriendsPage";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

     <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/find-travel-mate" element={<FindTravelMate />} />
          <Route path="/profile" element={<TravelProfilePage />} />
          <Route path="/friends" element={<TravelFriendsPage />} />
          <Route path="/userProfle" element={<SidebarMenu/>} />

    </Routes>


    </>
    
  );
}

export default App;
 