import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;

  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #fff;
  
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
   
  }
`;



export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  /* Media query for responsiveness */
  @media screen and (max-width: 768px) {
    display: none;
    
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #49be13;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Media query for responsiveness */
  @media screen and (max-width: 768px) {
    margin-left: 24px;
    
    &:hover {
      background: #fff;
      color: #010606;
    }
  }
`;

export const LogoImage = styled.img`
  width: 80px; /* Adjust the width as needed */
  height: auto;
`;



export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  /* Additional styles for the menu items */
  @media screen and (max-width: 768px) {
    display: ${({ showMenu }) => (showMenu ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 80px;
    background: #000;
    width: 100%;
    transition: all 0.3s ease-in-out;

    /* Styling for individual menu items */
    a {
      text-decoration: none;
      padding: 1rem;
      color: #fff;
      transition: color 0.3s ease;
      &:hover {
        color: #15cdfc;
      }
    }

    button {
      color: #fff;
      background-color: green;
      border: none;
      cursor: pointer;
      padding: 8px 16px;
      border-radius: 4px;
      margin-top: 10px;
      transition: background-color 0.3s ease;
      &:hover {
        background-color: darkgreen;
      }
    }
  }
`;