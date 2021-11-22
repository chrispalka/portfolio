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
import Footer from './footer';
import Profile from '../../assets/profile.jpg';
import Loading from './loading';

AOS.init();

const Global = createGlobalStyle`
body {
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 0;
  font-family: "space mono";
  background-image: linear-gradient( 296.3deg,  rgba(221,221,221,1) 61.4%, rgba(237,242,244,1) 67.4% );}
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
    margin: 10px 30px;
    display: inline-block;
      :hover {
        text-decoration: none;
      }
      &.active {
        color: white;
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
    filter: saturate(0);
  }
  img:hover {
    opacity: 1;
    filter: saturate(.8);
  }
  h1 {
    color: #2b2d42;
  }
`;

const ImageWrapper = styled.div``;

const CarouselContainer = styled(Container)`
  width: 80%;
  position: relative;
  margin-top: 8em;
  div {
    padding: 25px;
    h1 {
      color: #2b2d42;
    }
    display: block;
    color: #FFF;
  }
`;

const FooterContainer = styled(Container)`
  position: absolute;
  bottom: 1%;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
`;

const App = () => {
  const [showNav, setShowNav] = useState(false);
  const [currentPage, setCurrentPage] = useState('about');
  const [showPhoto, setShowPhoto] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const slideTimeout = { enter: 800, exit: 800 };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const routes = [
    {
      path: '/', name: 'About', Component: About, icon: faUser, show: showAbout,
    },
    {
      path: '/skills', name: 'Skills', Component: Skills, icon: faHammer, show: showSkills,
    },
    {
      path: '/portfolio', name: 'Portfolio', Component: Portfolio, icon: faBookOpen, show: showPortfolio,
    },
  ];

  useEffect(() => {
    setTimeout(() => setShowNav(true), isLoading ? 5800 : 5800 - 4900);
    setTimeout(() => setShowPhoto(true), isLoading ? 5500 : 5500 - 4900);
    setTimeout(() => setShowTitle(true), isLoading ? 5800 : 5800 - 4900);
    setTimeout(() => setShowAbout(true), isLoading ? 6200 : 6200 - 4900);
    setTimeout(() => setShowSkills(true), isLoading ? 6300 : 6300 - 4900);
    setTimeout(() => setShowPortfolio(true), isLoading ? 6400 : 6400 - 4900);
    setTimeout(() => setShowFooter(true), isLoading ? 6500 : 6500 - 4900);
    setTimeout(() => setIsLoading(false), 4900);
  }, [isLoading]);

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
          <NavBar
            cb={handlePageChange}
            routes={routes}
          />
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
          in={showTitle}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          <h1>(chef) => dev</h1>
        </CSSTransition>
      </PhotoContainer>
      <CarouselContainer>
        <CSSTransition
          in
          timeout={slideTimeout}
          classNames="slide"
          unmountOnExit
        >
          {currentPage === 'about' ? (
            <About />
          ) : currentPage === 'portfolio' ? (
            <Portfolio />
          ) : currentPage === 'skills' ? (
            <Skills />
          ) : <About />}
        </CSSTransition>

      </CarouselContainer>
      <CSSTransition
        in={showFooter}
        timeout={300}
        classNames="page"
        unmountOnExit
      >
        <FooterContainer>
          <Footer
            routes={routes}
          />
        </FooterContainer>
      </CSSTransition>
    </>
  );
};

export default App;
