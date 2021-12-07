import styled from 'styled-components';

export const ButtonsGroup = styled.div`
  grid-column: 1 / -1;
  margin-top: 1rem;

  display: flex;
  justify-content: center;

  & > *:not(:last-child) {
    margin-right: 3rem;
  }
`;
