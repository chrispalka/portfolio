/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';
import useDocumentScrollThrottled from './hooks/throttle';

const NavBar = ({ routes }) => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 500;

  const shadowStyle = shouldShowShadow ? 'shadow' : '';
  const hiddenStyle = shouldHideHeader ? 'hidden' : '';

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });
  return (
    <Navbar bg="" className={`mr-auto ${shadowStyle} ${hiddenStyle}`} expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          {routes.map((route) => (
            <Link
              activeClass="active"
              key={route.path}
              to={route.name.toLowerCase()}
              href={`#${route.name.toLowerCase()}`}
              spy
            >
              <FontAwesomeIcon icon={route.icon} className="fa-size" />
              <span className="roll-out" id="contact">{route.name}</span>
            </Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
