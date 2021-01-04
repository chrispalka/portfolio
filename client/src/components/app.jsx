import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Container } from 'react-bootstrap';
import NavBar from './navbar';
import About from './about';
import Skills from './skills';
import Portfolio from './portfolio';
import Contact from './contact';
import Profile from '../../assets/profile.jpg';
import '../../normalize.css';

const Global = createGlobalStyle`
body {
  background: #bdc3c7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
`;
const NavContainer = styled(Container)`
background-color: gray;
position: fixed;
left: 0;
right: 0;
max-width: 100%;
top: 0;
z-index: 999;
  .navbar-nav {
    font-family: "Roboto";
    font-weight: 600;
    margin: auto;
    .nav-link:hover {
      color: white;
    }
  }
`;

const PhotoContainer = styled(Container)`
  margin-top: 5rem;
  text-align: center;
  img {
    width: 15rem;
    height: 15rem;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const AboutContainer = styled(Container)`
  border: solid 2px blue;
  max-width: 100%;
`;

const SkillsContainer = styled(Container)`
  border: solid 2px red;
  max-width: 100%;
`;

const PortfolioContainer = styled(Container)`
  border: solid 2px yellow;
  max-width: 100%;
`;

const ContactContainer = styled(Container)`
  border: solid 2px green;
  max-width: 100%;
`;

const App = () => (
  <>
    <Global />
    <NavContainer>
      <NavBar />
    </NavContainer>
    <PhotoContainer>
      <img alt="" src={Profile} />
    </PhotoContainer>
    <AboutContainer>
      <About />
    </AboutContainer>
    <SkillsContainer>
      <Skills />
    </SkillsContainer>
    <PortfolioContainer>
      <Portfolio />
    </PortfolioContainer>
    <ContactContainer>
      <Contact />
    </ContactContainer>
  </>
);

export default App;
