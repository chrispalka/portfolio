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
    <Navbar bg="" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={`mr-auto ${shadowStyle} ${hiddenStyle}`}>
          {routes.map((route) => (
            <Link
              className="test"
              activeClass="active"
              key={route.path}
              to={route.name.toLowerCase()}
              href={`#${route.name.toLowerCase()}`}
              spy
            >
              <FontAwesomeIcon icon={route.icon} className="fa-size" />
            </Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
