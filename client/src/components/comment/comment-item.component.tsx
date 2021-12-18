import React from 'react';

import Avatar from '../avatar/avatar.component';

import {
  CommentContainer,
  UserPhotoContainer,
  UserName,
  CommentDateTime,
  CommentContent,
} from './comment-item.styles';

import { formatPostDate } from '../../utils/datetime-format.utils';

interface CommentProps {
  text: string;
  created: Date;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}

const CommentItem: React.FC<CommentProps> = ({ text = '', user, created }) => {
  return (
    <CommentContainer>
      <UserPhotoContainer>
        <Avatar src={user.avatar} alt={user.name} />
      </UserPhotoContainer>
      <UserName>{user.name}</UserName>
      <CommentDateTime>{formatPostDate(created)}</CommentDateTime>
      <CommentContent>{text}</CommentContent>
    </CommentContainer>
  );
};

export default CommentItem;
