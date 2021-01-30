/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const MainContainer = styled(Container)`
  right: 0;
  left: 0;
  height: 500px;
  border-bottom: 1px solid white;
  h1 {
    font-weight: 600;
  }
  `;

const InnerDiv = styled(Container)`
  height: 300px;
  box-shadow: 10px 9px 9px -9px rgba(0, 0, 0.70, 0.70);
  background-color: #14213d;
  transition: transform .2s;
  :hover {
    transform: scale(1.03);
  }
`;

const About = () => {
  const [clicked, setClick] = useState(false);
  return (
    <MainContainer data-aos="fade-up" data-aos-duration="4000" id="about">
      <h1 onClick={() => setClick(!clicked)}>Let me introduce myself</h1>
      <InnerDiv>
        <p>
          Hi! My name is Chris Palka, an aspiring software engineer & tech
          enthusiast. I absolutely love thinking outside of the box to solve
          real-world problems, harnessing my creativity both on and off the plate.
          New technologies are always exciting and I have a strong passion for troubleshooting.
        </p>
      </InnerDiv>
    </MainContainer>
  );
};

export default About;
