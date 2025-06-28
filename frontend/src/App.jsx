import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar"; 
import Home from "./component/Home";
import FindTravelMate from "./component/FindTravelMate"; 
import ProfilePage from "./component/ProfilePage";
// import CurrentPlans from "./component/CurrentPlans";
import FriendsPage from "./component/FriendsPage";
// import SettingsPage from "./component/SettingsPage";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-travel-mate" element={<FindTravelMate />} />
        <Route path="/profile" element={<ProfilePage/>}></Route>
        {/* <Route path="/plan" element={<CurrentPlans/>}></Route> */}
        <Route path="/friends" element={<FriendsPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;



