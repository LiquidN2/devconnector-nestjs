import React, { MouseEventHandler, useState } from 'react';

import PostHeader from './post-header.component';
import PostContent from './post-content.component';
import PostInteraction from './post-interaction.component';
import Comments from '../comment/comments.component';

import { PostContainer } from './post.styles';

import { PostContext } from './post.context';

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
  commentsCount?: number;
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
  commentsCount = 0,
}) => {
  const [commentsHidden, setCommentsHidden] = useState(true);
  const [localCommentsCount, setLocalCommentsCount] = useState(commentsCount);

  const toggleCommentsHidden: MouseEventHandler<HTMLElement> = () => {
    setCommentsHidden(!commentsHidden);
  };

  return (
    <PostContainer>
      <PostContext.Provider
        value={{
          commentsCount: localCommentsCount,
          setCommentsCount: setLocalCommentsCount,
        }}
      >
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
          commentsCount={localCommentsCount}
        />
        {!commentsHidden && <Comments postId={id} />}
      </PostContext.Provider>
    </PostContainer>
  );
};

export default Post;
