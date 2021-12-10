import React, { MouseEventHandler, useState } from 'react';

import DropdownMenu from '../dropdown-menu/dropdown-menu.component';
import DropdownMenuOption from '../dropdown-menu/dropdown-menu-option.component';

import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthToken } from '../../redux/auth/auth.selector';
import { useGetWhoAmIQuery } from '../../redux/user/user.api';

import { UserNavContainer, UserNavAvatar } from './user-nav.styles';

const UserNav: React.FC = () => {
  const [dropdownHidden, setDropdownHidden] = useState(true);

  const { signout } = useActions();
  const authToken = useAppSelector(selectAuthToken);
  const { data, error, isLoading } = useGetWhoAmIQuery(authToken);

  const handleToggleDropdown: MouseEventHandler<HTMLImageElement> = () => {
    setDropdownHidden(!dropdownHidden);
  };

  return (
    <UserNavContainer>
      <UserNavAvatar
        src={data && data.avatar ? data.avatar : '/img/users/user-4.jpg'}
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
