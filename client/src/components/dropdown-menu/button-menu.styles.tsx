import styled from 'styled-components';

export const Button = styled.div`
  border: none;
  background-color: transparent;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  transition: all 0.2s;
  position: relative;

  &:hover {
    cursor: pointer;
    background-color: var(--color-grey-lightest);
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 1.5rem;
    width: 1.5rem;
    fill: var(--color-grey-light);
  }
`;
