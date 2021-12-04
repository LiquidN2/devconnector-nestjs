import styled from 'styled-components';

export const SearchContainer = styled.form`
  //position: relative;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  font-family: inherit;
  border: 1px solid var(--color-grey-lighter);
  border-radius: 0.4rem;
  padding: 1rem 1rem 1rem 4rem;
  // margin-top: 1rem;
  font-size: 1.4rem;
  width: 30rem;
  background-color: var(--color-grey-lightest);
  transition: border 0.2s, width 0.2s;

  &:focus {
    outline: none;
    border: 1px solid var(--color-primary);
    width: 50rem;
  }
`;

export const SearchIcon = styled.svg`
  width: 2rem;
  height: 2rem;
  color: var(--color-grey-dark);
  fill: none;
  transform: translateX(3.2rem);
`;
