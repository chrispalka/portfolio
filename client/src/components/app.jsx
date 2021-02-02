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
  background-color: #131F3B;
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
#about {
  left: -11px;
}
#skills {
  left: -15px;
}
#portfolio {
  left: -23px;
}
#contact {
  left: -17px;
}
.navbar-nav {
  margin: auto;
  white-space: nowrap;
  :hover .roll-out {
    display: block;
    opacity: 1;
    position: relative;
    top:0;
    right: 100px;
      transition: all 600ms;
    }
    :hover .roll-out #about {
      left: -11px;
    }
    :hover .roll-out #skills {
      left: -15px;
    }
    :hover .roll-out #portfolio {
      left: -23px;
    }
    :hover .roll-out #contact {
      left: -16px;
    }
  }
  a {
    color: rgba(255,255,255,.3);
    max-width: 15px;
    margin: 10px 50px;
    display: inline-block;
      :hover, &.active {
        color: #f9df74;
        text-decoration: none;
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
    padding: 25px;
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
  const [showTitle, setShowTitle] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const slideTimeout = { enter: 800, exit: 800 };

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
    {
      path: '/contact', name: 'Contact', Component: Contact, icon: faAddressCard, show: showContact,
    },
  ];

  useEffect(() => {
    setTimeout(() => setShowNav(true), 5800);
    setTimeout(() => setShowPhoto(true), 5500);
    setTimeout(() => setShowTitle(true), 5800);
    setTimeout(() => setShowAbout(true), 6200);
    setTimeout(() => setShowSkills(true), 6300);
    setTimeout(() => setShowPortfolio(true), 6400);
    setTimeout(() => setShowContact(true), 6500);
    setTimeout(() => setIsLoading(false), 4900);
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
          in={showTitle}
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
        in={showContact}
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
