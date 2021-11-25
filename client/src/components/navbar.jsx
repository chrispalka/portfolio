/* eslint-disable react/prop-types */
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';

const NavContainer = styled(Container)`
position: fixed;
left: 0;
right: 0;
max-width: 100%;
top: 0;
padding: 0;
z-index: 999;
max-width: 100%;
.roll-out {
  display: block;
  opacity: 0;
  top: -20px;
  right: 0;
  margin: 0;
  position: relative;
  transition: all 600ms;
}
.navbar-nav {
  margin: auto;
  white-space: nowrap;
  .active {
    color: black !important;
    border-bottom: 2px solid maroon !important;
  }
  a {
    cursor: pointer;
    color: black;
    margin: 10px 30px;
    display: inline-block;
      :hover {
        text-decoration: none;
      }
    }
  }
`;

const NavBar = ({ routes, cb, currentPage }) => (
  <NavContainer currentPage={currentPage}>
    <Navbar bg="" className="mr-auto" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          {routes.map((route) => (
            <Nav.Link
              className={`${currentPage === route.name.toLowerCase() ? 'active' : ''}`}
              onClick={() => cb(route.name.toLowerCase())}
              key={route.path}
              to={route.name.toLowerCase()}
            >
              {route.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </NavContainer>
);

export default NavBar;
