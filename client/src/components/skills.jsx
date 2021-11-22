import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const skillList = [
  'Javascript',
  'NodeJS',
  'React',
  'Express',
  'Redux',
  'Docker',
  'MySQL',
  'MongoDB',
];

const SkillsContainer = styled(Container)`
  right: 0;
  left: 0;
  height: 500px;
  border-bottom: 1px solid #2b2d42;
  li {
    font-size: 16px;
  }
  h1 {
    font-weight: 600;
  }
`;

const InnerDiv = styled(Container)`
  height: 300px;
  box-shadow: 10px 9px 9px -9px rgba(0, 0, 0.70, 0.70);
  background-color: #2b2d42;
  li {
    color: #8d99ae;
  }

  transition: transform .2s;
  :hover {
    transform: scale(1.03);
    li {
      color: #FFF;
    }
  }
`;

const List = styled.li`

`;

const Skills = () => (
  <SkillsContainer data-aos="fade-up" data-aos-duration="4000" id="skills">
    <h1>Skills</h1>
    <InnerDiv>
      {skillList.map((skill) => (
        <List
          key={skill}
        >
          {skill}
        </List>
      ))}
    </InnerDiv>
  </SkillsContainer>
);

export default Skills;
