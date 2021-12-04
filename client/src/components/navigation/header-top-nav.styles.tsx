import styled from 'styled-components';

export const HeaderTopNavContainer = styled.nav`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 2.5rem;
  }
`;

export const HeaderTopNavBtn = styled.button`
  //display: flex;
  flex-direction: row;
  border: none;
  background-color: transparent;
  position: relative;

  &:hover {
    cursor: pointer;

    svg {
      fill: var(--color-primary);
    }
  }
`;

export const IconNotification = styled.span`
  position: absolute;
  top: 0.8rem;
  right: 0;
  background-color: orangered;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  display: inline-block;
`;
