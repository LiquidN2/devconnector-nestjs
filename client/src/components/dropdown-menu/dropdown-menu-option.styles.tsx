import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const optionStyle = css`
  display: inline-block;
  background-color: white;
  border: none;
  padding: 1rem;
  z-index: 100;
  font-size: 1.4rem;
  text-align: center;

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
