import React, { MouseEventHandler, useState, useRef } from 'react';

import MenuButton from '../dropdown-menu/button-menu.component';
import DropdownMenu from '../dropdown-menu/dropdown-menu.component';
import DropdownMenuOption from '../dropdown-menu/dropdown-menu-option.component';

import { MenuContainer } from './search-result-item-menu.styles';

import { useClickOutside } from '../../hooks/useClickOutside';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthToken } from '../../redux/auth';
import { useRequestConnectionMutation } from '../../redux/connection';

interface SearchResultItemMenuProps {
  userId: string;
}

const SearchResultItemMenu: React.FC<SearchResultItemMenuProps> = ({
  userId,
}) => {
  const ref = useRef() as React.Ref<HTMLDivElement>;
  const [dropdownHidden, setDropdownHidden] = useState(true);
  const authToken = useAppSelector(selectAuthToken);
  const [requestConnection, { isLoading, isSuccess }] =
    useRequestConnectionMutation();
  useClickOutside(ref, () => setDropdownHidden(true));

  const toggleDropdownHidden: MouseEventHandler<HTMLElement> = () => {
    setDropdownHidden(!dropdownHidden);
  };

  const handleRequestConnection: MouseEventHandler<HTMLElement> = () => {
    const body = { target: userId };
    requestConnection({ token: authToken, body });
  };

  return (
    <MenuContainer ref={ref}>
      <MenuButton onClick={toggleDropdownHidden} />
      <DropdownMenu hidden={dropdownHidden} top="4.8rem">
        <DropdownMenuOption type="link" url={`/users/${userId}`}>
          View Profile
        </DropdownMenuOption>
        <DropdownMenuOption
          type="button"
          onClick={handleRequestConnection}
          disabled={isLoading || isSuccess}
        >
          {isLoading && 'Requesting..'}
          {!isLoading && isSuccess && 'Request sent'}
          {!isLoading && !isSuccess && 'Connect'}
        </DropdownMenuOption>
        <DropdownMenuOption type="button">Send message</DropdownMenuOption>
      </DropdownMenu>
    </MenuContainer>
  );
};

export default SearchResultItemMenu;
