// Footer.jsx

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #000;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const CopyrightText = styled.p`
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <CopyrightText>© 2023 Fauzan T™</CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
