import styled, { css } from 'styled-components';

export const InputGroup = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

const InputTextStyles = css`
  font-family: inherit;
  font-size: 1.6rem;
  color: var(--color-grey-dark);

  padding: 1.2rem 1.5rem;
  width: 100%;

  background-color: var(--color-grey-lightest);
  border: 1px solid transparent;
  transition: border 0.2s;

  &::placeholder {
    font-family: inherit;
    font-weight: 300;
    color: var(--color-grey-light);
  }

  &:focus {
    outline: none;
    border: 1px solid var(--color-primary);
  }
`;

export const InputLabel = styled.label`
  color: var(--color-grey-dark);
  font-size: 1.6rem;
`;

export const Input = styled.input`
  ${InputTextStyles}
`;

export const TextArea = styled.textarea`
  ${InputTextStyles};
`;
