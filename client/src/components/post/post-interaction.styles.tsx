import styled from 'styled-components';

export const InteractionContainer = styled.div`
  align-self: flex-end;
  display: flex;

  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`;
