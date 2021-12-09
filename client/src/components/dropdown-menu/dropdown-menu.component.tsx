import React from 'react';

import { MenuContainer, ArrowUp } from './dropdown-menu.styles';

interface DropdownMenuProps {
  hidden: boolean;
  top?: string;
  right?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  hidden,
  children,
  top = '4.8rem',
  right = '0',
}) => {
  return !hidden ? (
    <MenuContainer style={{ top, right }}>
      <ArrowUp />
      {children}
    </MenuContainer>
  ) : (
    <div style={{ position: 'absolute' }} />
  );
};

export default DropdownMenu;
