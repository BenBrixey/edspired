import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavItem = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: '.';
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }
  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`;

const BookingNavItem = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :hover {
    color: white;
    ::after {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
  background: var(--blue);

  border: 1px solid black;
  padding: 1rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  --cast: 2px;
  box-shadow: var(--cast) var(--cast) 0 var(--grey);
  text-shadow: 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
`;

const NavbarLinks = () => (
  <>
    <NavItem to="/">Home</NavItem>
    <NavItem to="/about">About Me</NavItem>
    <NavItem to="/services">Services</NavItem>
    <NavItem to="/clubs">Clubs</NavItem>
    <NavItem to="/contact">Contact</NavItem>
    <BookingNavItem to="/book">Book a consultation</BookingNavItem>
  </>
);

export default NavbarLinks;
