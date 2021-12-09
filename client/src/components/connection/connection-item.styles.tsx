import styled from 'styled-components';

export const ConnectionItemContainer = styled.div`
  display: flex;
`;

export const UserContainer = styled.div`
  flex-grow: 1;
  margin-left: 1rem;

  & > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export const UserName = styled.h6`
  font-weight: 500;
  font-size: 1.6rem;
  color: var(--color-grey-darkest);
`;

export const UserCompany = styled.p`
  font-weight: 300;
  font-size: 1.4rem;
  color: var(--color-primary);
`;

export const UserLocation = styled.p`
  font-weight: 300;
  font-size: 1.3rem;
  color: var(--color-grey);
`;

export const ConnectionMenuContainer = styled.div`
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
