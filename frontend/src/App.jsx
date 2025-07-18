import {  Routes, Route  , Navigate} from "react-router-dom";
import { useState } from "react";
import Navbar from "./component/Navbar"; 
import Home from "./component/Home";
import SidebarMenu from "./component/Profile/SidebarMenu";
import FindTravelMate from "./component/FindTravelMate"; 
import TravelProfilePage from "./component/Profile/TravelProfilePage";
import TravelFriendsPage from "./component/FriendsPage/TravelFriendsPage";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import Profile from "./component/Dashboard/Profile";
import Settings from "./component/Dashboard/Settings";
import Friends from "./component/Dashboard/Friends";
import CurrentPlan from "./component/Dashboard/CurrentPlan";
import DashboardLayout from "./component/Dashboard/DashboardLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  return (
    <>
      <Navbar />
      <ToastContainer position="top-center" />
     <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/find-travel-mate" element={<FindTravelMate />} />

          <Route path="/Dashboard" element={<DashboardLayout/>} >
                  <Route index element={<Navigate to="profile" />} />
                  <Route path="profile" element={<Profile/>} />
                  <Route path="currentPlan" element={<CurrentPlan/>} />
                  <Route path="userFriends" element={<Friends/>} />
                  <Route path="settings" element={<Settings/>} />
          </Route>

    </Routes>


    </>
    
  );
}

export default App;
 