import styled from 'styled-components';
import IconSearch from '../icons/icon-search.component';

export const SearchContainer = styled.form`
  //position: relative;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  font-family: inherit;
  font-weight: 300;
  border: 1px solid var(--color-grey-lighter);
  border-radius: 0.4rem;
  padding: 1rem 1rem 1rem 4rem;
  // margin-top: 1rem;
  font-size: 1.4rem;
  width: 50rem;
  background-color: var(--color-grey-lightest);
  transition: border 0.2s, width 0.2s;

  &:focus {
    outline: none;
    border: 1px solid var(--color-primary);
    width: 55rem;
  }

  &::placeholder {
    color: var(--color-grey-light);
  }
`;

export const SearchIcon = styled(IconSearch)`
  width: 2rem;
  height: 2rem;
  color: var(--color-grey-dark);
  fill: none;
  transform: translateX(3.2rem);
`;
