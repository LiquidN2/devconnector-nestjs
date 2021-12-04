import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainNavContainer = styled.nav`
  display: flex;
  justify-content: center;
`;

export const MainNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 2.3rem 0;

  font-size: 1.6rem;
  color: var(--color-grey-dark);

  border-bottom: 2px solid transparent;
  transition: all 0.2s;

  &:not(:last-child) {
    margin-right: 5rem;
  }

  &:hover {
    color: var(--color-primary);
  }

  &.active {
    color: var(--color-primary);
    border-bottom: 2px solid var(--color-primary);
  }
`;
