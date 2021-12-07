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

export const UserImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 10rem;
  margin-right: 1.5rem;
  border: 1px solid transparent;
  cursor: pointer;
`;

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-grey-darkest);
`;

export const UserTitle = styled.p`
  font-size: 1.3rem;
  color: var(--color-grey-light);
`;

export const MenuAndTimeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  position: relative;

  & > *:not(:last-child) {
    margin-right: 0.5rem;
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

export const PostMenuButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.3rem;
  padding: 1rem;

  &:hover {
    cursor: pointer;
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
    fill: var(--color-grey-light);
  }
  //position: absolute;
  //right: 0;
`;

export const DropDownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 3.3rem;
  width: 10rem;
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
  border-top: 1px solid var(--color-grey-light);
  border-left: 1px solid var(--color-grey-light);
  background-color: white;
  transform: rotate(45deg);
  position: absolute;
  right: 1.7rem;
  top: -0.6rem;
`;

export const DropDownMenuBtn = styled.button`
  background-color: white;
  border: none;
  padding: 1rem 0;

  color: var(--color-primary);

  &:hover {
    cursor: pointer;
  }
`;
