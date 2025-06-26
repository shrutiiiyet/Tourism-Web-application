import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar"; 
import Home from "./component/Home";
import FindTravelMate from "./component/FindTravelMate"; 
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-travel-mate" element={<FindTravelMate />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;
