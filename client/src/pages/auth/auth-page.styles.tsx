import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  //background-color: red;
`;

export const FormBox = styled.div`
  flex: 1;

  background-color: white;
  max-width: 50rem;
  margin: 0 auto;
  padding: 4rem;

  border: none;
  border-radius: 0.3rem;

  display: flex;
  flex-direction: column;

  box-shadow: 0 0.2rem 2rem 0.5rem rgba(0, 0, 0, 0.2);
`;

export const AuthNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;

  list-style-type: none;

  margin-bottom: 4rem;
`;

export const AuthNavLink = styled(NavLink)`
  flex-grow: 1;
  display: block;
  padding: 2rem 3rem;

  font-size: 1.6rem;
  text-align: center;
  text-decoration: none;
  color: var(--color-grey-dark);
  background-color: var(--color-grey-lightest);
  border: 2px solid transparent;

  &.active {
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
    background-color: white;
  }
`;
