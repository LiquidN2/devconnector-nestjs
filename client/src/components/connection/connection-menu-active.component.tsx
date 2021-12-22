import React, { MouseEventHandler, useRef, useState } from 'react';

import MenuButton from '../dropdown-menu/button-menu.component';
import DropdownMenu from '../dropdown-menu/dropdown-menu.component';
import DropdownMenuOption from '../dropdown-menu/dropdown-menu-option.component';
import { MenuContainer } from './connection-menu-active.styles';

import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthToken } from '../../redux/auth';
import { useRemoveConnectionMutation } from '../../redux/connection';
import { useClickOutside } from '../../hooks/useClickOutside';

interface ConnectionMenuActiveProps {
  connectionId: string;
  userId: string;
}

const ConnectionMenuActive: React.FC<ConnectionMenuActiveProps> = ({
  connectionId,
  userId,
}) => {
  const [dropdownHidden, setDropdownHidden] = useState(true);

  const ref = useRef() as React.Ref<HTMLDivElement>;
  useClickOutside(ref, () => setDropdownHidden(true));

  const authToken = useAppSelector(selectAuthToken);
  const [removeConnection] = useRemoveConnectionMutation();

  const toggleDropdownHidden: MouseEventHandler<HTMLElement> = () => {
    setDropdownHidden(!dropdownHidden);
  };

  const handleRemoveConnection: MouseEventHandler<HTMLElement> = () => {
    removeConnection({ token: authToken, connectionId });
  };

  return (
    <MenuContainer ref={ref}>
      <MenuButton onClick={toggleDropdownHidden} />
      <DropdownMenu hidden={dropdownHidden} top="4.8rem">
        <DropdownMenuOption type="link" url={`/users/${userId}/profile`}>
          View Profile
        </DropdownMenuOption>
        <DropdownMenuOption type="link" url={`/users/${userId}/posts`}>
          View Posts
        </DropdownMenuOption>
        <DropdownMenuOption type="button" onClick={handleRemoveConnection}>
          Remove
        </DropdownMenuOption>
      </DropdownMenu>
    </MenuContainer>
  );
};

export default ConnectionMenuActive;
