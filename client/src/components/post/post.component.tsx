import React, { MouseEventHandler, useState } from 'react';

import PostHeader from './post-header.component';
import PostContent from './post-content.component';
import PostInteraction from './post-interaction.component';
import Comments from '../comment/comments.component';

import { PostContainer } from './post.styles';

interface PostProps {
  id: string;
  name: string;
  status: string;
  avatar: string;
  created: Date;
  text: string;
  likesCount?: number;
  likedByCurrentUser?: boolean;
  likeIdByCurrentUser?: string;
}

const Post: React.FC<PostProps> = ({
  id,
  name,
  status,
  avatar,
  created,
  text,
  likesCount = 0,
  likedByCurrentUser = false,
  likeIdByCurrentUser,
}) => {
  const [commentsHidden, setCommentsHidden] = useState(false);

  const toggleCommentsHidden: MouseEventHandler<HTMLElement> = () => {
    setCommentsHidden(!commentsHidden);
  };

  return (
    <PostContainer>
      <PostHeader
        postId={id}
        name={name}
        status={status}
        avatar={avatar}
        created={created}
      />
      <PostContent text={text} />
      <PostInteraction
        postId={id}
        likesCount={likesCount}
        likedByCurrentUser={likedByCurrentUser}
        likeIdByCurrentUser={likeIdByCurrentUser}
        toggleCommentsHidden={toggleCommentsHidden}
      />
      {!commentsHidden && <Comments />}
    </PostContainer>
  );
};

export default Post;
