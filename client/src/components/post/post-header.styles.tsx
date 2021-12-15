import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-grey-lightest);
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const UserName = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-grey-darkest);
  margin-bottom: 0.3rem;
`;

export const UserTitle = styled.p`
  font-size: 1.2rem;
  color: var(--color-primary);
  font-weight: 300;
`;

export const MenuAndTimeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  position: relative;

  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

export const PostTime = styled.span`
  font-weight: 300;
  font-size: 1.4rem;
  color: var(--color-grey-light);
`;

export const PostMenuContainer = styled.div`
  position: relative;
`;
