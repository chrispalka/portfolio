import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const SkillsContainer = styled(Container)`
  border: 2px solid gray;
  background-color: white;
  height: 500px;
  h1 {
    font-family: "Roboto";
    font-weight: 600;
  }
`;

const Skills = () => (
  <SkillsContainer id="skills">
    <h1>Skills</h1>
  </SkillsContainer>
);

export default Skills;
