import React, { MouseEventHandler, useState, useRef } from 'react';

import MenuButton from '../dropdown-menu/button-menu.component';
import DropdownMenu from '../dropdown-menu/dropdown-menu.component';
import DropdownMenuOption from '../dropdown-menu/dropdown-menu-option.component';

import { MenuContainer } from './search-result-item-menu.styles';

import { useClickOutside } from '../../hooks/useClickOutside';

interface SearchResultItemMenuProps {
  userId: string;
}

const SearchResultItemMenu: React.FC<SearchResultItemMenuProps> = ({
  userId,
}) => {
  const ref = useRef() as React.Ref<HTMLDivElement>;
  const [dropdownHidden, setDropdownHidden] = useState(true);

  useClickOutside(ref, () => setDropdownHidden(true));

  const toggleDropdownHidden: MouseEventHandler<HTMLElement> = () => {
    setDropdownHidden(!dropdownHidden);
  };

  return (
    <MenuContainer ref={ref}>
      <MenuButton onClick={toggleDropdownHidden} />
      <DropdownMenu hidden={dropdownHidden} top="4.8rem">
        <DropdownMenuOption type="link" url={`/users/${userId}`}>
          View Profile
        </DropdownMenuOption>
        <DropdownMenuOption type="button">
          Request connection
        </DropdownMenuOption>
        <DropdownMenuOption type="button">Send message</DropdownMenuOption>
      </DropdownMenu>
    </MenuContainer>
  );
};

export default SearchResultItemMenu;
