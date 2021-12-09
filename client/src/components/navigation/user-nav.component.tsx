import React, { MouseEventHandler, useState } from 'react';

import DropdownMenu from '../dropdown-menu/dropdown-menu.component';
import DropdownMenuOption from '../dropdown-menu/dropdown-menu-option.component';

import { useActions } from '../../hooks/useActions';

import { UserNavContainer, UserNavAvatar } from './user-nav.styles';

const UserNav: React.FC = () => {
  const [dropdownHidden, setDropdownHidden] = useState(true);

  const { signout } = useActions();

  const handleToggleDropdown: MouseEventHandler<HTMLImageElement> = () => {
    setDropdownHidden(!dropdownHidden);
  };

  return (
    <UserNavContainer>
      <UserNavAvatar
        src="/img/users/user-4.jpg"
        onClick={handleToggleDropdown}
        alt="user name"
      />

      <DropdownMenu hidden={dropdownHidden} right="1rem" top="5.8rem">
        <DropdownMenuOption type="link" url="/profile">
          Profile
        </DropdownMenuOption>
        <DropdownMenuOption type="link" url="/posts">
          Posts
        </DropdownMenuOption>
        <DropdownMenuOption type="link" url="/connections">
          Connections
        </DropdownMenuOption>
        <DropdownMenuOption type="button" onClick={() => signout()}>
          Logout
        </DropdownMenuOption>
      </DropdownMenu>
    </UserNavContainer>
  );
};

export default UserNav;
