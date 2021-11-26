import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';

const icons = [
  {
    icon: faGithub,
    url: 'https://github.com/chrispalka',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/chrispalka/',
  },
  {
    icon: faAddressCard,
    url: 'mailto:cpalka87@gmail.com',
  },
];

const FooterContainer = styled.a`
  padding: 10px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
  :hover {
    color: #2b2d42;
  }
`;

const Footer = () => (
  <>
    {
      icons.map((icon, i) => (
        <FooterContainer
          key={i}
          href={icon.url}
          target="_blank"
        >
          <FontAwesomeIcon icon={icon.icon} className="fa-size" />
        </FooterContainer>
      ))
    }
  </>
);

export default Footer;
