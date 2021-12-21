import React, { MouseEventHandler, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { formatPostDate } from '../../utils/datetime-format.utils';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthToken } from '../../redux/auth';
import { useDeletePostMutation } from '../../redux/post';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useMe } from '../../hooks/useUser';

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
  userId: string;
  name: string;
  status: string;
  avatar: string;
  created: Date;
}

const PostHeader: React.FC<PostHeaderProps> = ({
  postId,
  userId,
  name,
  status,
  avatar,
  created,
}) => {
  const ref = useRef(null);
  const [dropDownHidden, setDropDownHidden] = useState(true);
  useClickOutside(ref, () => setDropDownHidden(true));

  const authToken = useAppSelector(selectAuthToken);
  const [deletePost] = useDeletePostMutation();
  const { data } = useMe();
  const myUserId = data && data.id ? data.id : '';

  const toggleDropDownHidden: MouseEventHandler<HTMLElement> = () => {
    setDropDownHidden(!dropDownHidden);
  };

  const handleDeletePost: MouseEventHandler<HTMLElement> = () => {
    deletePost({ token: authToken, postId });
  };

  return (
    <HeaderContainer>
      <UserContainer>
        <Avatar src={`${avatar}`} alt={name} />
        <UserDescription>
          <Link
            style={{ textDecoration: 'none' }}
            to={myUserId !== userId ? `/users/${userId}` : '/'}
          >
            <UserName>{name}</UserName>
          </Link>
          <UserTitle>{status}</UserTitle>
        </UserDescription>
      </UserContainer>

      <MenuAndTimeContainer>
        <PostTime>{formatPostDate(created)}</PostTime>
        <div ref={ref}>
          <MenuButton onClick={toggleDropDownHidden} />
          <DropdownMenu hidden={dropDownHidden}>
            {myUserId === userId && (
              <DropdownMenuOption type="button">Edit Post</DropdownMenuOption>
            )}
            <DropdownMenuOption type="button" onClick={handleDeletePost}>
              Delete Post
            </DropdownMenuOption>
          </DropdownMenu>
        </div>
      </MenuAndTimeContainer>
    </HeaderContainer>
  );
};

export default PostHeader;
