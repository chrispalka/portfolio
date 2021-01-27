import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const PortfolioContainer = styled(Container)`
  right: 0;
  left: 0;
  height: 500px;
  h1 {
    font-weight: 600;
  }
`;

const InnerDiv = styled(Container)`
  height: 300px;
  box-shadow: 10px 9px 9px -9px rgba(0, 0, 0.70, 0.70);
  background-color: #14213d;
`;

const Portfolio = () => (
  <PortfolioContainer data-aos="fade-up" data-aos-duration="4000" id="portfolio">
    <h1>Portfolio</h1>
    <InnerDiv>
      <p>
        klsjfhalksdjflkjasdlfjlasdjflkjlkjflkjslfkjasdlkfjasd
        lkfjasd;lkfjfasdfsdafasdjkhfgajkshdfjhgsadfjhgasdjkhfg
        saldkhflkjasdhfkjhasdlkjfhkalsjdhfkljashdfkljhsadkjlfh
      </p>
    </InnerDiv>
  </PortfolioContainer>
);

export default Portfolio;
