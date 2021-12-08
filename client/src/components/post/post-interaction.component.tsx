import React, { MouseEventHandler } from 'react';

import IconThumbsUp from '../icons/icon-thumbsup.component';
import IconComments from '../icons/icon-comments.component';
import IconShare from '../icons/icon-share.component';

import { InteractionContainer } from './post-interaction.styles';

import { withIconAndCount } from './with-icon-n-count.component';

const ButtonLike = withIconAndCount(IconThumbsUp, true);
const ButtonComments = withIconAndCount(IconComments, true);
const ButtonShare = withIconAndCount(IconShare, true);

interface PostInteractionProps {
  toggleCommentsHidden: MouseEventHandler<HTMLElement>;
}

const PostInteraction: React.FC<PostInteractionProps> = ({
  toggleCommentsHidden,
}) => {
  return (
    <InteractionContainer>
      <ButtonLike active={false} count={10} />
      <ButtonComments
        active={false}
        count={10}
        onClick={toggleCommentsHidden}
      />
      <ButtonShare active={false} count={10} />
    </InteractionContainer>
  );
};

export default PostInteraction;
