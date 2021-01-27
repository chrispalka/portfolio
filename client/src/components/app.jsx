/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable no-return-assign */
/* eslint-disable no-nested-ternary */
import React, {
  useState,
  useEffect,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import styled, { createGlobalStyle } from 'styled-components';
import { Container } from 'react-bootstrap';
import {
  faUser, faHammer, faBookOpen, faAddressCard,
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from './navbar';
import About from './about';
import Skills from './skills';
import Portfolio from './portfolio';
import Contact from './contact';
import Footer from './footer';
import Profile from '../../assets/profile.jpg';
import Loading from './loading';

AOS.init();

const Global = createGlobalStyle`
body {
  margin: 0;
  font-family: "inconsolata";
  background-color: #14213d;
}
html {
  scroll-behavior: smooth;
}
`;

const NavContainer = styled(Container)`
position: fixed;
left: 0;
right: 30;
max-width: 5%;
top: 15;
z-index: 999;
.navbar-nav {
  display: block;
  a {
    padding: 5px;
    display: block;
      color: rgba(255,255,255,.3);
      :hover, &.active {
        color: #f9df74;
      }
    }
  }
`;

const PhotoContainer = styled(Container)`
  margin-top: 5rem;
  margin-bottom: 12rem;
  height: 10rem;
  text-align: center;
  img {
    transition: opacity 0.25s ease-in-out;
    transition: filter 0.25s ease-in-out;
    width: 15rem;
    height: 15rem;
    object-fit: cover;
    border-radius: 50%;
    filter: sepia(.8);
  }
  img:hover {
    opacity: 1;
    filter: sepia(0);
  }
  h1 {
    color: #f9df74;
  }
`;

const ImageWrapper = styled.div``;

const CarouselContainer = styled(Container)`
  width: 80%;
  position: relative;
  margin-top: 8em;
  div {
    h1 {
      color: #f9df74;
    }
    display: block;
    color: #FFF;

  }
`;

const FooterContainer = styled(Container)`
  margin-top: 45rem;
  text-align: center;
`;

const App = () => {
  const [showNav, setShowNav] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [showComponentOne, setShowComponentOne] = useState(false);
  const [showComponentTwo, setShowComponentTwo] = useState(false);
  const [showComponentThree, setShowComponentThree] = useState(false);
  const [showComponentFour, setShowComponentFour] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const slideTimeout = { enter: 800, exit: 800 };

  const routes = [
    {
      path: '/', name: 'About', Component: About, icon: faUser, show: showComponentOne,
    },
    {
      path: '/skills', name: 'Skills', Component: Skills, icon: faHammer, show: showComponentTwo,
    },
    {
      path: '/portfolio', name: 'Portfolio', Component: Portfolio, icon: faBookOpen, show: showComponentThree,
    },
    {
      path: '/contact', name: 'Contact', Component: Contact, icon: faAddressCard, show: showComponentFour,
    },
  ];

  useEffect(() => {
    setTimeout(() => setShowNav(true), 4800);
    setTimeout(() => setShowPhoto(true), 4500);
    setTimeout(() => setShowComponentOne(true), 5200);
    setTimeout(() => setShowComponentTwo(true), 5300);
    setTimeout(() => setShowComponentThree(true), 5400);
    setTimeout(() => setShowComponentFour(true), 5500);
    setTimeout(() => setIsLoading(false), 3900);
  }, []);

  return (
    <>
      <Global />
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
          classNames="slide"
          unmountOnExit
        >
          <NavBar routes={routes} />
        </CSSTransition>
      </NavContainer>
      <PhotoContainer>
        <CSSTransition
          in={showPhoto}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          <ImageWrapper>
            <img
              alt=""
              src={Profile}
            />
          </ImageWrapper>
        </CSSTransition>
        <CSSTransition
          in={showPhoto}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          <h1>Ex-Chef Turned Dev</h1>
        </CSSTransition>
      </PhotoContainer>
      <CarouselContainer>
        {routes.map(({ Component, show }) => (
          <CSSTransition
            in={show}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            <Component />
          </CSSTransition>
        ))}
      </CarouselContainer>
      <CSSTransition
        in={showComponentFour}
        timeout={300}
        classNames="page"
        unmountOnExit
      >
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </CSSTransition>
    </>
  );
};

export default App;
