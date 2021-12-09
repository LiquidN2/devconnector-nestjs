import React, { MouseEventHandler, useState } from 'react';

import Avatar from '../avatar/avatar.component';
import MenuButton from '../dropdown-menu/button-menu.component';
import DropdownMenu from '../dropdown-menu/dropdown-menu.component';
import DropdownMenuOption from '../dropdown-menu/dropdown-menu-option.component';
import { ButtonPrimary, Button } from '../UI/button.component';

import {
  ConnectionItemContainer,
  UserCompany,
  UserContainer,
  UserName,
  UserLocation,
  ConnectionMenuContainer,
} from './connection-item.styles';

interface ConnectionItemProps {
  type?: 'pending' | 'active';
}

const ConnectionItem: React.FC<ConnectionItemProps> = ({ type = 'active' }) => {
  const [dropdownHidden, setDropdownHidden] = useState(true);

  const toggleDropdownHidden: MouseEventHandler<HTMLElement> = () => {
    setDropdownHidden(!dropdownHidden);
  };

  const renderMenu = (type: 'pending' | 'active') => {
    switch (type) {
      default:
      case 'active':
        return (
          <ConnectionMenuContainer>
            <MenuButton onClick={toggleDropdownHidden} />
            <DropdownMenu hidden={dropdownHidden} top="4.8rem">
              <DropdownMenuOption
                type="button"
                onClick={() => console.log('clicked')}
              >
                Remove
              </DropdownMenuOption>
            </DropdownMenu>
          </ConnectionMenuContainer>
        );

      case 'pending':
        return (
          <ConnectionMenuContainer>
            <ButtonPrimary>Accept</ButtonPrimary>
            <Button>Decline</Button>
          </ConnectionMenuContainer>
        );
    }
  };

  return (
    <ConnectionItemContainer>
      <Avatar src="/img/users/user-4.jpg" />
      <UserContainer>
        <UserName>Jane Smith</UserName>
        <UserCompany>Developer at ABC Pty Ltd</UserCompany>
        <UserLocation>Melbourne VIC, Australia</UserLocation>
      </UserContainer>
      {renderMenu(type)}
    </ConnectionItemContainer>
  );
};

export default ConnectionItem;
