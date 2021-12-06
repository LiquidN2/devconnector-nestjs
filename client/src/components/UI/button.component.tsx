import styled from 'styled-components';

export const Button = styled.button`
  background-color: var(--color-grey-lightest);
  font-family: inherit;
  font-size: 1.6rem;
  border: none;
  padding: 1.4rem 1.8rem;
  transition: background-color 0.2s;
  cursor: pointer;
  color: var(--color-grey-dark);

  &:active {
    transform: translateY(1px);
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: var(--color-grey-lighter);
  }
`;

export const ButtonPrimary = styled(Button)`
  background-color: var(--color-primary);
  color: white;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;
