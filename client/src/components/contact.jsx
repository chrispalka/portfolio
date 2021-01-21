import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const ContactContainer = styled(Container)`
  position: absolute;
  right: 0;
  left: 0;
  height: 500px;
  h1 {
    font-family: "Roboto";
    font-weight: 600;
  }
`;

const Contact = () => (
  <ContactContainer id="contact">
    <h1>Contact</h1>
    <p>klsjfhalksdjflkjasdlfjlasdjflkjlkjflkjslfkjasdlkfjasd;lkfjasd;lkfj</p>
  </ContactContainer>
);

export default Contact;
