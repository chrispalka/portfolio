import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Container } from 'react-bootstrap';
import NavBar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import '../../normalize.css';

const Global = createGlobalStyle`
body {
  background: #ffd89b;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #19547b, #ffd89b);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #19547b, #ffd89b); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
`;
const NavContainer = styled(Container)`
  .navbar-nav {
    margin: auto;
  }
`;

const MainContainer = styled(Container)`
  margin: auto;
  text-align: center;
`;

const App = () => (
  <>
    <Global />
    <NavContainer>
      <NavBar />
    </NavContainer>
    <MainContainer>
      <h1>hi</h1>
    </MainContainer>
  </>
);

export default App;
