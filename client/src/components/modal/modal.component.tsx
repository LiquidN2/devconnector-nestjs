import React, {
  ButtonHTMLAttributes,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';

import { Overlay } from './modal.styles';

interface ModalProps {
  isHidden: boolean;
  setModalHidden: Function;
}

const Modal: React.FC<ModalProps> = ({ isHidden, setModalHidden }) => {
  const handleCloseModal: MouseEventHandler<HTMLButtonElement> = () => {
    setModalHidden(true);
  };

  return !isHidden ? (
    <>
      <Overlay>overlay</Overlay>
      <button
        style={{ position: 'absolute', zIndex: 1000 }}
        onClick={handleCloseModal}
      >
        Close
      </button>
    </>
  ) : null;
};

export default Modal;
