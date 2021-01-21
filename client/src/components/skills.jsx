import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const SkillsContainer = styled(Container)`
  position: absolute;
  right: 0;
  left: 0;
  height: 500px;
  h1 {
    font-family: "Roboto";
    font-weight: 600;
  }
`;

const Skills = () => (
  <SkillsContainer id="skills">
    <h1>Skills</h1>
    <p>klsjfhalksdjflkjasdlfjlasdjflkjlkjflkjslfkjasdlkfjasd;lkfjasd;lkfj</p>
  </SkillsContainer>
);

export default Skills;
