import React, { MouseEventHandler, useState } from 'react';

import IconThumbsUp from '../icons/icon-thumbsup.component';
import IconComments from '../icons/icon-comments.component';
import IconShare from '../icons/icon-share.component';

import { InteractionContainer } from './post-interaction.styles';

import { withIconAndCount } from './with-icon-n-count.component';

import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthToken } from '../../redux/auth/auth.selector';
import {
  useDeleteLikeMutation,
  useDeleteLikeByPostIdMutation,
  useCreateLikeMutation,
} from '../../redux/like/like.api';

const ButtonLike = withIconAndCount(IconThumbsUp, true);
const ButtonComments = withIconAndCount(IconComments, true);
const ButtonShare = withIconAndCount(IconShare, true);

interface PostInteractionProps {
  toggleCommentsHidden: MouseEventHandler<HTMLElement>;
  postId?: string;
  likesCount?: number;
  likedByCurrentUser?: boolean;
  likeIdByCurrentUser?: string;
  commentsCount?: number;
}

const PostInteraction: React.FC<PostInteractionProps> = ({
  toggleCommentsHidden,
  postId,
  likesCount = 0,
  likedByCurrentUser = false,
  likeIdByCurrentUser,
  commentsCount = 0,
}) => {
  const [isLiked, setIsLiked] = useState(likedByCurrentUser);
  const [localLikesCount, setLocalLikesCount] = useState(likesCount);

  const authToken = useAppSelector(selectAuthToken);
  const [deleteLike] = useDeleteLikeByPostIdMutation();
  const [createLike] = useCreateLikeMutation();

  const toggleLike: MouseEventHandler<HTMLElement> = () => {
    if (!postId) return;

    if (isLiked) {
      setLocalLikesCount(localLikesCount - 1);
      deleteLike({ token: authToken, postId });
    } else {
      setLocalLikesCount(localLikesCount + 1);
      createLike({ token: authToken, body: { post: postId } });
    }

    setIsLiked(!isLiked);
  };

  return (
    <InteractionContainer>
      <ButtonLike
        active={isLiked}
        count={localLikesCount}
        onClick={toggleLike}
      />
      <ButtonComments
        active={false}
        count={commentsCount}
        onClick={toggleCommentsHidden}
      />
      <ButtonShare active={false} count={0} />
    </InteractionContainer>
  );
};

export default PostInteraction;
