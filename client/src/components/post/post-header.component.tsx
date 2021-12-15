import React, { MouseEventHandler, useState } from 'react';

import { formatPostDate } from '../../utils/datetime-format.utils';

import Avatar from '../avatar/avatar.component';
import MenuButton from '../dropdown-menu/button-menu.component';
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

interface PostHeaderProps {
  name: string;
  status: string;
  avatar: string;
  created: Date;
}

const PostHeader: React.FC<PostHeaderProps> = ({
  name,
  status,
  avatar,
  created,
}) => {
  const [dropDownHidden, setDropDownHidden] = useState(true);

  const toggleDropDownHidden: MouseEventHandler<HTMLElement> = () => {
    setDropDownHidden(!dropDownHidden);
  };

  return (
    <HeaderContainer>
      <UserContainer>
        <Avatar src={`${avatar}`} />
        <UserDescription>
          <UserName>{name}</UserName>
          <UserTitle>{status}</UserTitle>
        </UserDescription>
      </UserContainer>

      <MenuAndTimeContainer>
        <PostTime>{formatPostDate(created)}</PostTime>
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
