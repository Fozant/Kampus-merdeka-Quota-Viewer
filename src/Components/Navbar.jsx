import React from 'react';
import styled from 'styled-components'; 
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    LogoImage
  } from './NavbarElemets';
  


const Navbar = () => {
  const handleRefresh = () => {
    window.location.reload(); 
  };

  return (
    <>
      <Nav>
        {/* Centered text */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        
          <h1 style={{ color: '#fff' }}>Detail Kampus Merdeka Position Viewer </h1>
         
         
        </div>
        {/* End centered text */}
        <Bars />
        <NavMenu>
        <NavLink to='/' activeStyle>
                How to Use this app? Click Here
              </NavLink>
          <button onClick={handleRefresh} style={{
            color: '#fff',
            backgroundColor: 'green', // Set background color to green
            border: 'none',
            cursor: 'pointer',
            padding: '8px 16px', // Added padding for better button appearance
            borderRadius: '4px', // Added border radius for rounded corners
          }}>
            <i className="fas fa-sync-alt" style={{ marginRight: '5px' }}></i>Refresh
          </button>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
