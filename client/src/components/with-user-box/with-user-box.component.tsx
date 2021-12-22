import React from 'react';

import {
  ItemContainer,
  UserCompany,
  UserContainer,
  UserName,
  UserLocation,
  ProfileLink,
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
  connectionId?: string;
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
        <ProfileLink to={`/users/${props.userId}`}>
          <UserName>{name}</UserName>
        </ProfileLink>
        <UserCompany>
          {profileStatus} at {company}
        </UserCompany>
        <UserLocation>{location}</UserLocation>
      </UserContainer>

      {/* This should be a menu component */}
      <WrappedMenuComponent {...(props as P)} />
    </ItemContainer>
  );
}
