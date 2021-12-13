import React, { MouseEventHandler, useEffect, useState } from 'react';

import IconTimes from '../icons/icon-times.component';

import { Overlay, Content, ButtonClose } from './modal.styles';

interface ModalProps {
  modalHidden: boolean;
  setModalHidden: (modalHidden: boolean) => void;
  btnCloseModalHidden?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  modalHidden,
  setModalHidden,
  btnCloseModalHidden = false,
  children,
}) => {
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [contentOpacity, setContentOpacity] = useState(0);

  useEffect(() => {
    if (modalHidden) return;
    setTimeout(() => {
      setOverlayOpacity(1);
      setContentOpacity(1);
    }, 100);
  }, [modalHidden]);

  const handleCloseModal: MouseEventHandler<HTMLButtonElement> = () => {
    setOverlayOpacity(0);
    setContentOpacity(0);
    setTimeout(() => {
      setModalHidden(true);
    }, 100);
  };

  return !modalHidden ? (
    <>
      <Overlay style={{ opacity: `${overlayOpacity}` }} />

      <Content style={{ opacity: `${contentOpacity}` }}>
        {!btnCloseModalHidden && (
          <ButtonClose onClick={handleCloseModal}>
            <IconTimes />
          </ButtonClose>
        )}
        {children}
      </Content>
    </>
  ) : null;
};

export default Modal;
