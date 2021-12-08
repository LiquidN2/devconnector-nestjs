import React from 'react';

import {
  CommentContainer,
  UserPhotoContainer,
  UserPhoto,
  UserName,
  CommentDateTime,
  CommentContent,
} from './comment-item.styles';

const CommentItem: React.FC = () => {
  return (
    <CommentContainer>
      <UserPhotoContainer>
        <UserPhoto src="/img/users/user-4.jpg" />
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
