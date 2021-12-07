import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  transition: all 0.2s;
  //opacity: 0;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;
  //padding: 5rem;
  //width: 50rem;
  //height: 50rem;
  background-color: white;
  //opacity: 0;
  transition: all 0.2s;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;
