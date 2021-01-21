/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import {
  useLocation,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const content = [
  'Full Stack Developer',
  'Culinary Enthusiast',
  'Amateur Photographer',
];

const timeout = { enter: 5000, exit: 5000 };
const MainContainer = styled(Container)`
  position: absolute;
  right: 0;
  left: 0;
  height: 500px;
  h1 {
    font-family: "Roboto";
    font-weight: 600;
  }
`;

const Home = () => {
  const location = useLocation();
  const [clicked, setClick] = useState(false);
  return (
    <MainContainer id="home">
      <h1 onClick={() => setClick(!clicked)}>About</h1>
      {content.map((line) => (
        <CSSTransition
          in={clicked}
          timeout={timeout}
          key={location.key}
          classNames="slide"
        >
          <p>{line}</p>
        </CSSTransition>
      ))}
    </MainContainer>
  );
};

export default Home;
