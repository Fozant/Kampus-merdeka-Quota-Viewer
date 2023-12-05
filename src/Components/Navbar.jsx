import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import { Nav, NavLink, NavMenu, Bars } from './NavbarElemets';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <Nav>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <h1 style={{ color: '#fff', paddingRight:'14vw'}}> Kampus Merdeka MSIB Quota Position Viewer </h1>
        </div>
        <Bars onClick={handleToggleMenu} />
        <NavMenu showMenu={showMenu}>
          <NavLink to='/' activeStyle>
            How to Use this app? Click Here
          </NavLink>
          <NavLink to='/home' activeStyle>
            Magang Quota Viewer
          </NavLink>
          <NavLink to='/studi' activeStyle>
            Studi Independen Quota Viewer
          </NavLink>
          <button
            onClick={handleRefresh}
            style={{
              color: '#fff',
              backgroundColor: 'green',
              border: 'none',
              cursor: 'pointer',
              padding: '8px 16px',
              borderRadius: '4px',
            }}
          >
            <i className="fas fa-sync-alt" style={{ marginRight: '5px' }}></i>Refresh
          </button>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
