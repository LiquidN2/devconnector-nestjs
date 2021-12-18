import React from 'react';

import CommentItem from './comment-item.component';
import CommentForm from './comment-form.component';
import { CommentsContainer, ViewMoreComments } from './comments.styles';

import { useComments } from '../../hooks/useComments';

interface CommentsProps {
  postId: string;
}

const Comments: React.FC<CommentsProps> = ({ postId = '' }) => {
  const { data } = useComments(postId);

  return (
    <CommentsContainer>
      {data &&
        data.length !== 0 &&
        data.map((comment, index) => (
          <CommentItem
            key={index}
            text={comment.text}
            user={comment.user}
            created={comment.created}
          />
        ))}
      <ViewMoreComments>View more comments</ViewMoreComments>
      <CommentForm postId={postId} />
    </CommentsContainer>
  );
};

export default Comments;
