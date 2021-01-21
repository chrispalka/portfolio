import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const PortfolioContainer = styled(Container)`
  position: absolute;
  right: 0;
  left: 0;
  height: 500px;
  h1 {
    font-family: "Roboto";
    font-weight: 600;
  }
`;

const Portfolio = () => (
  <PortfolioContainer id="portfolio">
    <h1>Portfolio</h1>
    <p>klsjfhalksdjflkjasdlfjlasdjflkjlkjflkjslfkjasdlkfjasd;lkfjasd;lkfj</p>
  </PortfolioContainer>
);

export default Portfolio;
