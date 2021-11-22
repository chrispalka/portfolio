/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

const NavBar = ({ routes, cb }) => (
  <Navbar bg="" className="mr-auto" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        {routes.map((route) => (
          <Link
            onClick={() => cb(route.name.toLowerCase())}
            activeClass="active"
            key={route.path}
            to={route.name.toLowerCase()}
          >
            {route.name}
          </Link>
        ))}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
