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
  a {
    cursor: pointer;
    color: black;
    margin: 10px 30px 0;
    display: inline-block;
      :hover {
        text-decoration: none;
      }
    }
    .navvy:after {
      content: '';
      display: block;
      margin: auto;
      height: 2px;
      width: 0px;
      background: transparent;
      transition: width .2s ease, background-color .2s ease;
    }
    .navvy.active:after {
      width: 100%;
      margin-left: ${(props) => (props.currentpage === 'about' && '-1.1px')};
      background: maroon;
    }
  }
`;

const NavBar = ({ routes, cb, currentpage }) => (
  <NavContainer currentpage={currentpage}>
    <Navbar bg="" className="mr-auto" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          {routes.map((route) => (
            <Nav.Link
              className={`${currentpage === route.name.toLowerCase() ? 'navvy active' : 'navvy'}`}
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
