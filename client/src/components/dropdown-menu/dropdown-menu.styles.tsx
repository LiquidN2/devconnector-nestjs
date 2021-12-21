import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: absolute;
  right: 0;
  top: 3.3rem;
  border: 1px solid var(--color-grey-lighter);
  display: flex;
  flex-direction: column;

  & > *:hover {
    background-color: var(--color-grey-lightest);
  }
`;

export const ArrowUp = styled.div`
  height: 1rem;
  width: 1rem;
  border-top: 1px solid var(--color-grey-lighter);
  border-left: 1px solid var(--color-grey-lighter);
  background-color: white;
  transform: rotate(45deg);
  position: absolute;
  right: 0.8rem;
  top: -0.6rem;
`;
