import React, { MouseEventHandler, useState } from 'react';

import Avatar from '../avatar/avatar.component';
import MenuButton from '../UI/button-menu.component';
import DropdownMenu from '../dropdown-menu/dropdown-menu.component';
import DropdownMenuOption from '../dropdown-menu/dropdown-menu-option.component';

import {
  ConnectionItemContainer,
  UserCompany,
  UserContainer,
  UserName,
  UserLocation,
  ConnectionMenuContainer,
} from './connection-item.styles';

const ConnectionItem: React.FC = () => {
  const [dropdownHidden, setDropdownHidden] = useState(true);

  const toggleDropdownHidden: MouseEventHandler<HTMLElement> = () => {
    setDropdownHidden(!dropdownHidden);
  };

  return (
    <ConnectionItemContainer>
      <Avatar src="/img/users/user-4.jpg" />
      <UserContainer>
        <UserName>Jane Smith</UserName>
        <UserCompany>Developer at ABC Pty Ltd</UserCompany>
        <UserLocation>Melbourne VIC, Australia</UserLocation>
      </UserContainer>
      <ConnectionMenuContainer>
        <MenuButton onClick={toggleDropdownHidden} />
        <DropdownMenu hidden={dropdownHidden}>
          <DropdownMenuOption
            type="button"
            onClick={() => console.log('clicked')}
          >
            Option 3
          </DropdownMenuOption>
        </DropdownMenu>
      </ConnectionMenuContainer>
    </ConnectionItemContainer>
  );
};

export default ConnectionItem;
