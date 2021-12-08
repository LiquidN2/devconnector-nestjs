import React from 'react';

import { MenuContainer, ArrowUp } from './dropdown-menu.styles';

interface DropdownMenuProps {
  hidden: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ hidden, children }) => {
  return !hidden ? (
    <MenuContainer>
      <ArrowUp />

      {children}
    </MenuContainer>
  ) : (
    <div style={{ position: 'absolute' }} />
  );
};

export default DropdownMenu;
