import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const LoadingContainer = styled(Container)`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -100px;
`;

const Loading = () => (
  <LoadingContainer>
    <h1>Loading...</h1>
  </LoadingContainer>
);

export default Loading;
