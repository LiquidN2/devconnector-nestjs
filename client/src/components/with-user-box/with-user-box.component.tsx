import React from 'react';

import {
  ItemContainer,
  UserCompany,
  UserContainer,
  UserName,
  UserLocation,
  MenuContainer,
} from './with-user-box.styles';
import Avatar from '../avatar/avatar.component';

interface UserBoxProps {
  userId: string;
  name: string;
  email: string;
  avatar: string;
  profileStatus: string;
  company: string;
  location: string;
}

export function withUserBox<P extends object>(
  WrappedMenuComponent: React.FunctionComponent<P>,
): React.FC<UserBoxProps> {
  return ({
    // userId,
    name,
    email,
    avatar,
    profileStatus,
    company,
    location,
    ...props
  }) => (
    <ItemContainer>
      <Avatar src={avatar} alt={name} />
      <UserContainer>
        <UserName>{name}</UserName>
        <UserCompany>
          {profileStatus} at {company}
        </UserCompany>
        <UserLocation>{location}</UserLocation>
      </UserContainer>
      <WrappedMenuComponent {...(props as P)} />
    </ItemContainer>
  );
}
