import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  transition: all 0.2s;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;
  background-color: white;
  transition: all 0.2s;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
  border: none;
  background: none;

  &:hover > {
    svg {
      fill: var(--color-primary);
    }
  }
`;
