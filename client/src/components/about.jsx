import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const MainContainer = styled(Container)`
  border: 2px solid gray;
  background-color: white;
  height: 500px;
  h1 {
    font-family: "Roboto";
    font-weight: 600;
  }
`;

const About = () => (
  <MainContainer id="about">
    <h1>About</h1>
  </MainContainer>
);

export default About;
