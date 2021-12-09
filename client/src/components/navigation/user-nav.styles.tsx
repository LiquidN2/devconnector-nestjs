import styled from 'styled-components';

export const UserNavContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const UserNavAvatar = styled.img`
  height: 5rem;
  border-radius: 10rem;
  border: 2px solid transparent;
  transition: all 0.2s;

  &:hover {
    border: 2px solid var(--color-primary);
  }
`;
