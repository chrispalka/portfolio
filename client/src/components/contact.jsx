import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const ContactContainer = styled(Container)`
  border: 2px solid gray;
  background-color: white;
  height: 500px;
  h1 {
    font-family: "Roboto";
    font-weight: 600;
  }
`;

const Contact = () => (
  <ContactContainer id="contact">
    <h1>Contact</h1>
  </ContactContainer>
);

export default Contact;
