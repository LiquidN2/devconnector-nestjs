import React, { MouseEventHandler, useState } from 'react';

import {
  UserNavContainer,
  UserNavAvatar,
  UserNavDropdown,
  UserNavLink,
  UserNavButton,
} from './user-nav.styles';

const UserNav: React.FC = () => {
  const [dropdownHidden, setDropdownHidden] = useState(true);

  const handleToggleDropdown: MouseEventHandler<HTMLImageElement> = () => {
    setDropdownHidden(!dropdownHidden);
  };

  return (
    <UserNavContainer>
      <UserNavAvatar
        src="/img/users/user-4.jpg"
        onClick={handleToggleDropdown}
      />
      {!dropdownHidden && (
        <UserNavDropdown>
          <UserNavLink to="/profile">Profile</UserNavLink>
          <UserNavLink to="/connections">Connections</UserNavLink>
          <UserNavLink to="/posts">Posts</UserNavLink>
          <UserNavButton>Sign Out</UserNavButton>
        </UserNavDropdown>
      )}
    </UserNavContainer>
  );
};

export default UserNav;
