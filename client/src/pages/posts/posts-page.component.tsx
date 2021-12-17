import React from 'react';
import { Helmet } from 'react-helmet';

import ProfileBaseBox from '../../components/profile/profile-base-box.component';
import PostForm from '../../components/post/post-form.component';
import Post from '../../components/post/post.component';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';

import {
  ColLeft,
  ContentContainer,
  ColRightSpan,
  SpinnerContainer,
} from '../../components/layout/content-layout.styles';

import { usePosts } from '../../hooks/usePosts';

interface PostPageProps {
  target?: string;
}

const PostPage: React.FC<PostPageProps> = ({ target = '' }) => {
  const { data, isLoading, isFetching } = usePosts(target);

  return (
    <ContentContainer>
      <Helmet>
        <title>DevConnector | Posts</title>
      </Helmet>
      <ColLeft>
        <ProfileBaseBox />
      </ColLeft>
      <ColRightSpan>
        <PostForm />
        {(isLoading || isFetching) && (
          <SpinnerContainer>
            <LoadingSpinner />
          </SpinnerContainer>
        )}
        {data &&
          data.map(
            (
              {
                _id,
                name,
                status,
                avatar,
                text,
                created,
                likesCount,
                likedByCurrentUser,
                likeIdByCurrentUser,
              },
              index,
            ) => (
              <Post
                key={index}
                id={_id}
                name={name}
                status={status}
                avatar={avatar}
                created={created}
                text={text}
                likesCount={likesCount}
                likedByCurrentUser={likedByCurrentUser}
                likeIdByCurrentUser={likeIdByCurrentUser}
              />
            ),
          )}
      </ColRightSpan>
    </ContentContainer>
  );
};

export default PostPage;
