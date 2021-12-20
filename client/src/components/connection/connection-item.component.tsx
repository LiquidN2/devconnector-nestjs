import React, { MouseEventHandler, useState, useRef } from 'react';

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

import { useClickOutside } from '../../hooks/useClickOutside';

import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthToken } from '../../redux/auth';
import {
  useUpdateConnectionStatusMutation,
  useRemoveConnectionMutation,
} from '../../redux/connection';
import { ConnectionType } from '../../redux/connection';

interface ConnectionItemProps {
  type?: 'pending' | 'active';
  _id: string;
  userId: string;
  name: string;
  email: string;
  avatar: string;
  profileStatus: string;
  company: string;
  location: string;
}

const ConnectionItem: React.FC<ConnectionItemProps> = ({
  type = 'active',
  _id,
  userId,
  name,
  email,
  avatar,
  profileStatus,
  location,
  company,
}) => {
  const ref = useRef() as React.Ref<HTMLDivElement>;
  const [dropdownHidden, setDropdownHidden] = useState(true);
  useClickOutside(ref, () => setDropdownHidden(true));

  const authToken = useAppSelector(selectAuthToken);
  const [updateConnection] = useUpdateConnectionStatusMutation();
  const [removeConnection] = useRemoveConnectionMutation();

  const toggleDropdownHidden: MouseEventHandler<HTMLElement> = () => {
    setDropdownHidden(!dropdownHidden);
  };

  const handleAcceptConnection: MouseEventHandler<HTMLElement> = () => {
    updateConnection({
      token: authToken,
      connectionId: _id,
      body: { status: ConnectionType.Active },
    });
  };

  const handleDeclineConnection: MouseEventHandler<HTMLElement> = () => {
    updateConnection({
      token: authToken,
      connectionId: _id,
      body: { status: ConnectionType.Rejected },
    });
  };

  const handleRemoveConnection: MouseEventHandler<HTMLElement> = () => {
    removeConnection({ token: authToken, connectionId: _id });
  };

  const renderMenu = (type: 'pending' | 'active') => {
    switch (type) {
      default:
      case 'active':
        return (
          <ConnectionMenuContainer ref={ref}>
            <MenuButton onClick={toggleDropdownHidden} />
            <DropdownMenu hidden={dropdownHidden} top="4.8rem">
              <DropdownMenuOption type="button">
                View Profile
              </DropdownMenuOption>
              <DropdownMenuOption type="button">View Posts</DropdownMenuOption>
              <DropdownMenuOption
                type="button"
                onClick={handleRemoveConnection}
              >
                Remove
              </DropdownMenuOption>
            </DropdownMenu>
          </ConnectionMenuContainer>
        );

      case 'pending':
        return (
          <ConnectionMenuContainer>
            <ButtonPrimary onClick={handleAcceptConnection}>
              Accept
            </ButtonPrimary>
            <Button onClick={handleDeclineConnection}>Decline</Button>
          </ConnectionMenuContainer>
        );
    }
  };

  return (
    <ConnectionItemContainer>
      <Avatar src={avatar} alt={name} />
      <UserContainer>
        <UserName>{name}</UserName>
        <UserCompany>
          {profileStatus} at {company}
        </UserCompany>
        <UserLocation>{location}</UserLocation>
      </UserContainer>
      {renderMenu(type)}
    </ConnectionItemContainer>
  );
};

export default ConnectionItem;
