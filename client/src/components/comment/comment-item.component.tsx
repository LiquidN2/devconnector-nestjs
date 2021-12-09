import React from 'react';

import Avatar from '../avatar/avatar.component';

import {
  CommentContainer,
  UserPhotoContainer,
  UserName,
  CommentDateTime,
  CommentContent,
} from './comment-item.styles';

const CommentItem: React.FC = () => {
  return (
    <CommentContainer>
      <UserPhotoContainer>
        <Avatar src="/img/users/user-4.jpg" />
      </UserPhotoContainer>
      <UserName>John Doe</UserName>
      <CommentDateTime>30 mins ago</CommentDateTime>
      <CommentContent>
        Minima eos nisi autem nihil expedita magni sequi doloribus excepturi
        illum
      </CommentContent>
    </CommentContainer>
  );
};

export default CommentItem;
