import styled from 'styled-components';

export const LinkText = styled.a`
  font-family: inherit;
  text-decoration: none;
  color: var(--color-primary);
  //cursor: default;

  &:hover {
    color: var(--color-primary-dark);
  }
`;
