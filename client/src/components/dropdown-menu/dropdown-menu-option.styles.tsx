import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const optionStyle = css`
  background-color: white;
  border: none;
  padding: 1rem 0;
  z-index: 100;

  color: var(--color-primary);

  &:hover {
    cursor: pointer;
  }
`;

export const MenuBtn = styled.button`
  ${optionStyle};
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  ${optionStyle};
`;
