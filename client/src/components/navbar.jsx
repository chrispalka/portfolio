/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = ({ clickHandler, routes }) => (
  <Navbar bg="" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {routes.map((route) => (
          <Nav.Link
            key={route.path}
            as={NavLink}
            to={route.path}
            onClick={(e) => clickHandler(e)}
          >
            {route.name}
          </Nav.Link>
        ))}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;


{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}