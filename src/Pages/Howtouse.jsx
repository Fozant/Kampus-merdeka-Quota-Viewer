import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from 'react-router-dom';
import gambar from '../asset/skrinsut.jpg';
import './Howtouse.css';
import gambar2 from '../asset/gambar2.png';
import gambar3 from '../asset/gambar3.png';

function Howtouse() {
  return (
    <div className="all">
      <Navbar />
      <h1>Brief Tutorial How To Insert The Data :D</h1>
      <h1>Note: if you are using Mobile phone please use this web Horizontally Or use desktop site</h1>
      <div className="class">
        <br />
        <img className='gambar' src={gambar} alt="Screenshot" />
        <h1>Note: If you search and your position is not showing, it means it also doesn't work on the Kampus Merdeka web</h1>
      
          
            <img className='gambar2' src={gambar2} alt="gambar2" />
          
          
            <img className='gambar3' src={gambar3} alt="gambar2" />
         
            
        <Link to="/home" className="center-button">
          <button>Ready To see How much Quota The position Offers???</button>
        </Link>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default Howtouse;
