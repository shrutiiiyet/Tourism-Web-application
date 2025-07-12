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

function App() {
<<<<<<< HEAD
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {isLoggedIn && <SidebarMenu />}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
      <div className={`${isLoggedIn ? "ml-56" : ""} min-h-screen bg-gray-100`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
          {isLoggedIn && (
            <>
              <Route path="/find-travel-mate" element={<FindTravelMate />} />
              <Route path="/profile" element={<TravelProfilePage />} />
              <Route path="/friends" element={<TravelFriendsPage />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
=======

  return (
    <>
      <Navbar />

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
    
>>>>>>> 1c4786fa459ee338003085d213a447d6f89bcdf3
  );
}

export default App;
 