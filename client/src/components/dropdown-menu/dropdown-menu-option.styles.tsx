import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const optionStyle = css`
  display: block;
  background-color: white;
  border: none;
  padding: 1rem;
  z-index: 100;
  font-size: 1.3rem;
  text-align: center;

  color: var(--color-primary);
  white-space: nowrap;

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
