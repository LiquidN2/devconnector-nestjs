import React from 'react';

import CommentItem from './comment-item.component';
import CommentForm from './comment-form.component';
import { CommentsContainer, ViewMoreComments } from './comments.styles';

const Comments: React.FC = () => {
  return (
    <CommentsContainer>
      <CommentItem />
      <CommentItem />
      <ViewMoreComments>View more comments</ViewMoreComments>
      <CommentForm />
    </CommentsContainer>
  );
};

export default Comments;
