import React, { MouseEventHandler, useState } from 'react';

import Avatar from '../avatar/avatar.component';
import MenuButton from '../UI/button-menu.component';
import DropdownMenu from '../dropdown-menu/dropdown-menu.component';
import DropdownMenuOption from '../dropdown-menu/dropdown-menu-option.component';

import {
  HeaderContainer,
  UserContainer,
  UserDescription,
  UserName,
  UserTitle,
  MenuAndTimeContainer,
  PostTime,
} from './post-header.styles';

const PostHeader: React.FC = () => {
  const [dropDownHidden, setDropDownHidden] = useState(true);

  const toggleDropDownHidden: MouseEventHandler<HTMLElement> = () => {
    setDropDownHidden(!dropDownHidden);
  };

  return (
    <HeaderContainer>
      <UserContainer>
        <Avatar src="/img/users/user-4.jpg" />
        <UserDescription>
          <UserName>John Doe</UserName>
          <UserTitle>Developer</UserTitle>
        </UserDescription>
      </UserContainer>

      <MenuAndTimeContainer>
        <PostTime>2 hours ago</PostTime>
        <MenuButton onClick={toggleDropDownHidden} />
        <DropdownMenu hidden={dropDownHidden}>
          <DropdownMenuOption type="button">Edit Post</DropdownMenuOption>
          <DropdownMenuOption type="button">Delete Post</DropdownMenuOption>
        </DropdownMenu>
      </MenuAndTimeContainer>
    </HeaderContainer>
  );
};

export default PostHeader;
