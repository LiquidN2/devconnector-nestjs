import React, {
  ButtonHTMLAttributes,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';

import { Overlay, Content, ButtonClose } from './modal.styles';

interface ModalProps {
  modalHidden: boolean;
  setModalHidden: (modalHidden: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({
  modalHidden,
  setModalHidden,
  children,
}) => {
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [contentOpacity, setContentOpacity] = useState(0);

  useEffect(() => {
    if (modalHidden) return;
    setTimeout(() => {
      setOverlayOpacity(1);
      setContentOpacity(1);
    }, 200);
  }, [modalHidden]);

  const handleCloseModal: MouseEventHandler<HTMLButtonElement> = () => {
    setOverlayOpacity(0);
    setContentOpacity(0);
    setTimeout(() => {
      setModalHidden(true);
    }, 200);
  };

  return !modalHidden ? (
    <>
      <Overlay style={{ opacity: `${overlayOpacity}` }} />

      <Content style={{ opacity: `${contentOpacity}` }}>
        <ButtonClose onClick={handleCloseModal}>Close</ButtonClose>
        {children}
      </Content>
    </>
  ) : null;
};

export default Modal;
