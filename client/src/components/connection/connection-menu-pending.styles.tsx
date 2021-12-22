import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  & > button {
    font-size: 1.4rem;
  }

  & > button:not(:last-child) {
    margin-right: 1rem;
  }
`;
