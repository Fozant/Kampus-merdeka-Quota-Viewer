import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './Pages/Home';
import HowToUse from './Pages/Howtouse'; // Ensure correct filename and casing

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HowToUse />} /> 
        <Route path="/home" element={<Home />} /> 
      </Routes>
    </Router>
  );
}

export default App;
