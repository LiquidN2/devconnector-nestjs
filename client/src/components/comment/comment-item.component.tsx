import React, { MouseEventHandler, useState } from 'react';

import Avatar from '../avatar/avatar.component';

import MenuButton from '../dropdown-menu/button-menu.component';
import DropdownMenu from '../dropdown-menu/dropdown-menu.component';
import DropdownMenuOption from '../dropdown-menu/dropdown-menu-option.component';

import {
  CommentContainer,
  UserPhotoContainer,
  UserName,
  CommentDateTime,
  CommentContent,
  MenuContainer,
} from './comment-item.styles';

import { formatPostDate } from '../../utils/datetime-format.utils';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthToken } from '../../redux/auth';
import { useDeleteCommentMutation } from '../../redux/comment';

interface CommentProps {
  id: string;
  text: string;
  created: Date;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}

const CommentItem: React.FC<CommentProps> = ({
  id,
  text = '',
  user,
  created,
}) => {
  const [dropdownHidden, setDropdownHidden] = useState(true);

  const authToken = useAppSelector(selectAuthToken);
  const [deleteComment] = useDeleteCommentMutation();

  const toggleDropdownHidden: MouseEventHandler<HTMLElement> = () => {
    setDropdownHidden(!dropdownHidden);
  };

  const handleDeleteComment: MouseEventHandler<HTMLElement> = () => {
    deleteComment({ token: authToken, commentId: id });
  };

  return (
    <CommentContainer>
      <UserPhotoContainer>
        <Avatar src={user.avatar} alt={user.name} />
      </UserPhotoContainer>
      <UserName>{user.name}</UserName>
      <CommentDateTime>{formatPostDate(created)}</CommentDateTime>
      <MenuContainer>
        <MenuButton onClick={toggleDropdownHidden} />
        <DropdownMenu hidden={dropdownHidden}>
          <DropdownMenuOption type="button">Edit</DropdownMenuOption>
          <DropdownMenuOption type="button" onClick={handleDeleteComment}>
            Delete
          </DropdownMenuOption>
        </DropdownMenu>
      </MenuContainer>
      <CommentContent>{text}</CommentContent>
    </CommentContainer>
  );
};

export default CommentItem;
