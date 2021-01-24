/* eslint-disable no-nested-ternary */
import React, {
  useState,
  useEffect,
} from 'react';
import {
  Route,
  useLocation,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled, { createGlobalStyle } from 'styled-components';
import { Container } from 'react-bootstrap';
import NavBar from './navbar';
import Home from './home';
import Skills from './skills';
import Portfolio from './portfolio';
import Contact from './contact';
import Profile from '../../assets/profile.jpg';
import Loading from './loading';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/skills', name: 'Skills', Component: Skills },
  { path: '/portfolio', name: 'Portfolio', Component: Portfolio },
  { path: '/contact', name: 'Contact', Component: Contact },
];

const Global = createGlobalStyle`
body {
  font-family: "inconsolata";
  background: ${(props) => (props.color === 'home'
    ? '#2d2d2d'
    : props.color === 'skills'
      ? '#ababab'
      : props.color === 'portfolio'
        ? '#8d2663'
        : props.color === 'contact'
          ? '#000000'
          : '#3B3E59')};
    }
html {
  scroll-behavior: smooth;
}
`;

const NavContainer = styled(Container)`
position: fixed;
left: 0;
right: 0;
max-width: 100%;
top: 0;
z-index: 999;
.navbar-nav {
  display: block;
  .nav-link {
      color: rgba(255,255,255,.3);
      :hover, &.active {
        color: white;
      }
    }
  }
`;

const PhotoContainer = styled(Container)`
  margin-top: 5rem;
  height: 10rem;
  text-align: center;
  img {
    width: 15rem;
    height: 15rem;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const CarouselContainer = styled(Container)`
  position: relative;
  margin-top: 8em;
  div {
    background-color: #a2d0c1;
    color: #2a9d8f;
  }
`;

const App = () => {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setShowNav(true), 4800);
    setTimeout(() => setShowPhoto(true), 4500);
    setTimeout(() => setShowCarousel(true), 4900);
    setTimeout(() => setIsLoading(false), 3900);
  }, []);
  const [clicked, setClick] = useState(false);
  const [color, setColor] = useState('');
  const clickHandler = (e) => {
    setColor(e.target.id);
    setClick(!clicked);
  };
  const timeout = 300;
  const slideTimeout = { enter: 800, exit: 800 };
  return (
    <>
      <Global color={color} clicked={clicked} />
      <CSSTransition
        in={isLoading}
        timeout={300}
        classNames="page"
        unmountOnExit
      >
        <Loading />
      </CSSTransition>
      <NavContainer>
        <CSSTransition
          in={showNav}
          timeout={slideTimeout}
          classNames="na"
          unmountOnExit
        >
          <NavBar clickHandler={clickHandler} routes={routes} />
        </CSSTransition>
      </NavContainer>
      <PhotoContainer>
        <CSSTransition
          in={showPhoto}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          <img alt="" src={Profile} />
        </CSSTransition>
      </PhotoContainer>
      <CSSTransition
        in={showCarousel}
        timeout={300}
        classNames="page"
        unmountOnExit
      >
        <CarouselContainer>
          <TransitionGroup>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={timeout}
                    classNames="page"
                    key={location.key}
                    unmountOnExit
                  >
                    <Component clicked={clicked} />
                  </CSSTransition>
                )}
              </Route>
            ))}
          </TransitionGroup>
        </CarouselContainer>
      </CSSTransition>
    </>
  );
};

export default App;
