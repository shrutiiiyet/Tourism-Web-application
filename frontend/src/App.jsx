import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar"; 
import Home from "./component/Home";
import FindTravelMate from "./component/FindTravelMate"; 

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-travel-mate" element={<FindTravelMate />} />
      </Routes>
    </Router>
  );
}

export default App;