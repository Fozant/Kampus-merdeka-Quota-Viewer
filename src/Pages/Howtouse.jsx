import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"; 
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import gambar from '../asset/skrinsut.jpg';
import './Howtouse.css';

function Howtouse() {
  return (
    <div className="all">
        
      <Navbar />
      <h1>Brief Tutorial How To Insert The Data :D </h1>
      <div className="class">
        <br />
        <img className='gambar' src={gambar} alt="Screenshot" />
        
      </div>
      
      <Link to="/home"> {/* Link to the "/home" route */}
      <div class="class center-button">  <button>Ready To see How much Quota The position Offer ???</button> </div>
        </Link>
      <Footer /> 
    </div>
  );
}

export default Howtouse;
