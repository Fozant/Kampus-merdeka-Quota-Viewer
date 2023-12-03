import React from 'react';
import styled from 'styled-components'; 

const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

const Bars = styled.div`
  display: none;
  color: #fff;
  
  /* Media query for responsiveness */
  @media screen and (max-width: 768px) {
    display: block;
    /* ...other styles... */
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  
  /* Media query for responsiveness */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  const handleRefresh = () => {
    window.location.reload(); 
  };

  return (
    <>
      <Nav>
        {/* Centered text */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <h1 style={{ color: '#fff' }}>Detail Kampus Merdeka Position Viewer</h1>
         
        </div>
        {/* End centered text */}
        <Bars />
        <NavMenu>
            
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
