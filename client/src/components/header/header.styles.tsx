import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: white;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
`;

export const HeaderTop = styled.div`
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

export const Logo = styled.span`
  color: var(--color-primary);
  margin-right: 15rem;
`;

export const UniversalSearchContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;
