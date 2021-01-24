import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import loadingGIF from '../../assets/loading.gif';

const LoadingContainer = styled(Container)`
  margin-top: 25rem;
  text-align: center;
  img {
    width: 75%;
  }
`;
const toggler = (e) => {
  e.preventDefault();
};

const Loading = () => (
  <LoadingContainer>
    <img src={loadingGIF} onContextMenu={(e) => toggler(e)} alt="" />
  </LoadingContainer>
);

export default Loading;
