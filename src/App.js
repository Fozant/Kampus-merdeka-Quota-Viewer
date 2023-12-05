import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Home from './Pages/Home';
import HowToUse from './Pages/Howtouse'; // Ensure correct filename and casing
import Studi from './Pages/Studi'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HowToUse />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/studi" element={<Studi />} /> 
      </Routes>
    </Router>
  );
}

export default App;
