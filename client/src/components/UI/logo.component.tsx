import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.svg`
  width: 4rem;
  height: 4rem;
  color: var(--color-primary);
`;

const Logo: React.FC = () => (
  <LogoContainer fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </LogoContainer>
);

export default Logo;
