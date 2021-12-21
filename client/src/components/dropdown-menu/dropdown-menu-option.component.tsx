import React, { MouseEventHandler } from 'react';

import { MenuBtn, MenuLink } from './dropdown-menu-option.styles';

interface DropdownMenuOptionProps {
  type: 'button' | 'link';
  disabled?: boolean;
  url?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

const DropdownMenuOption: React.FC<DropdownMenuOptionProps> = ({
  type,
  onClick,
  url = '/',
  disabled = false,
  children,
}) => {
  switch (type) {
    default:
    case 'button':
      return (
        <MenuBtn onClick={onClick} disabled={disabled}>
          {children}
        </MenuBtn>
      );

    case 'link':
      return <MenuLink to={url}>{children}</MenuLink>;
  }
};

export default DropdownMenuOption;
