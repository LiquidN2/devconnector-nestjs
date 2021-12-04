import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const UserNavContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const UserNavAvatar = styled.img`
  height: 5rem;
  border-radius: 10rem;
  border: 2px solid transparent;
  transition: all 0.2s;

  &:hover {
    //box-shadow: 0 1rem 2rem rbga(#000, 0.15);
    border: 2px solid var(--color-primary);
  }
`;

export const UserNavDropdown = styled.nav`
  position: absolute;
  top: 5.2rem;
  background-color: white;

  text-align: right;
  border: 1px solid var(--color-grey-lighter);

  list-style-type: none;

  display: flex;
  flex-direction: column;
`;

const NavLinkStyles = css`
  font-size: 1.6rem;
  color: var(--color-primary);
  //text-decoration: none;
  padding: 1rem 2rem;

  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    color: var(--color-primary-dark);
    background-color: var(--color-grey-lightest);
  }
`;

export const UserNavLink = styled(Link)`
  ${NavLinkStyles};
  text-decoration: none;
`;

export const UserNavButton = styled.button`
  background-color: transparent;
  border: none;
  text-align: right;
  ${NavLinkStyles};
`;
