import React, { MouseEventHandler } from 'react';

import { MenuBtn, MenuLink } from './dropdown-menu-option.styles';

interface DropdownMenuOptionProps {
  type: 'button' | 'link';
  url?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

const DropdownMenuOption: React.FC<DropdownMenuOptionProps> = ({
  type,
  onClick,
  url = '/',
  children,
}) => {
  switch (type) {
    default:
    case 'button':
      return <MenuBtn onClick={onClick}>{children}</MenuBtn>;

    case 'link':
      return <MenuLink to={url}>{children}</MenuLink>;
  }
};

export default DropdownMenuOption;
