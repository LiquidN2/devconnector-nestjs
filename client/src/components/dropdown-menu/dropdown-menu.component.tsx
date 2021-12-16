import React from 'react';

import { MenuContainer, ArrowUp } from './dropdown-menu.styles';

interface DropdownMenuProps {
  hidden: boolean;
  top?: string;
  right?: string;
  children?: React.ReactNode;
}

const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ hidden, children, top = '3.3rem', right = '0' }, ref) => {
    return !hidden ? (
      <MenuContainer ref={ref} style={{ top, right }}>
        <ArrowUp />
        {children}
      </MenuContainer>
    ) : (
      <div style={{ position: 'absolute' }} />
    );
  },
);

export default DropdownMenu;
