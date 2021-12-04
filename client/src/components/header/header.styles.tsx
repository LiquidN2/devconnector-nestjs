import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 7rem;
  border-bottom: 1px solid var(--color-grey-lighter);

  & > div {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const UniversalSearchContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;
