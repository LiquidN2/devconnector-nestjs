import React, { MouseEventHandler, useState } from 'react';

import { formatPostDate } from '../../utils/datetime-format.utils';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthToken } from '../../redux/auth/auth.selector';
import { useDeletePostMutation } from '../../redux/post/post.api';

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
  postId: string;
  name: string;
  status: string;
  avatar: string;
  created: Date;
}

const PostHeader: React.FC<PostHeaderProps> = ({
  postId,
  name,
  status,
  avatar,
  created,
}) => {
  const [dropDownHidden, setDropDownHidden] = useState(true);

  const authToken = useAppSelector(selectAuthToken);
  const [deletePost] = useDeletePostMutation();

  const toggleDropDownHidden: MouseEventHandler<HTMLElement> = () => {
    setDropDownHidden(!dropDownHidden);
  };

  const handleDeletePost: MouseEventHandler<HTMLElement> = () => {
    deletePost({ token: authToken, postId });
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
          <DropdownMenuOption type="button" onClick={handleDeletePost}>
            Delete Post
          </DropdownMenuOption>
        </DropdownMenu>
      </MenuAndTimeContainer>
    </HeaderContainer>
  );
};

export default PostHeader;
