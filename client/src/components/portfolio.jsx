import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const PortfolioContainer = styled(Container)`
  border: 2px solid gray;
  background-color: white;
  height: 500px;
  h1 {
    font-family: "Roboto";
    font-weight: 600;
  }
`;

const Portfolio = () => (
  <PortfolioContainer id="portfolio">
    <h1>Portfolio</h1>
  </PortfolioContainer>
);

export default Portfolio;
