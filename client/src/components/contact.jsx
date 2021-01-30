import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const ContactContainer = styled(Container)`
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

const Contact = () => (
  <ContactContainer data-aos="fade-up" data-aos-duration="4000" id="contact">
    <h1>Contact</h1>
    <InnerDiv>
      <p>
        klsjfhalksdjflkjasdlfjlasdjflkjlkjflkjslfkjasdlkfjasd
        lkfjasd;lkfjfasdfsdafasdjkhfgajkshdfjhgsadfjhgasdjkhfg
        saldkhflkjasdhfkjhasdlkjfhkalsjdhfkljashdfkljhsadkjlfh
      </p>
    </InnerDiv>
  </ContactContainer>
);

export default Contact;
