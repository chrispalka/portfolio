import React from 'react';
import { Container } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
  'Tailwind CSS',
  'Styled Components',
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
    text-align: center;
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

const slideTimeout = { enter: 800, exit: 800 };

const Skills = () => (
  <SkillsContainer id="skills">
    <CSSTransition
      in
      timeout={10000}
      classNames="page"
    >
      <h1>Skills</h1>
    </CSSTransition>
    <InnerDiv>
      {/* {skillList.map((skill) => ( */}
      <p>Hi</p>
      {/* ))} */}
    </InnerDiv>
  </SkillsContainer>
);

export default Skills;
