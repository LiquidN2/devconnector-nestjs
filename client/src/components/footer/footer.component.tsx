import styled, { css } from 'styled-components';
import React from 'react';

const FooterContainer = styled.p`
  font-family: inherit;
  font-size: 1.4rem;
  margin-bottom: 2rem;
  color: var(--color-primary);
  text-align: center;
`;

const Footer: React.FC<{ fontColor?: string }> = ({ fontColor }) => (
  <FooterContainer style={fontColor ? { color: fontColor } : {}}>
    DevConnector &copy; 2021 by Hugh Nguyen
  </FooterContainer>
);

export default Footer;
