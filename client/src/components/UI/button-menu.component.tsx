import React, { MouseEventHandler } from 'react';
import IconElipsisH from '../icons/icon-elipsis-h.component';

import { Button } from './button-menu.styles';

const MenuButton: React.FC<{
  onClick: MouseEventHandler<HTMLElement>;
}> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <IconElipsisH />
    </Button>
  );
};

export default MenuButton;
