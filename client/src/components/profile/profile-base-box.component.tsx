import React from 'react';

import SocialLink from './social-link.component';

import {
  BoxContainer,
  PhotoContainer,
  Photo,
  Name,
  Status,
  Location,
  ConnectionsPostsContainer,
  ConnectionsBox,
  ConnectionsCount,
  ConnectionsText,
  PostsBox,
  PostsCount,
  PostsText,
  SocialMediaContainer,
} from './profile-base-box.styles';

import { BtnLinkEditPrimary } from '../UI/button.component';

import { useProfileWithUserId } from '../../hooks/useProfile';
import { useConnections } from '../../hooks/useConnections';
import { usePosts } from '../../hooks/usePosts';

interface ProfileBaseBoxProps {
  userId?: string;
  profileId?: string;
}

const ProfileBaseBox: React.FC<ProfileBaseBoxProps> = ({
  profileId = '',
  userId = '',
}) => {
  const { data } = useProfileWithUserId(userId);
  const { data: connectionsData } = useConnections(userId);
  const { data: postsData } = usePosts(userId);

  if (!data) return <div>No user data</div>;

  const {
    handle,
    website,
    linkedIn,
    github,
    location,
    status,
    user: { name, email, avatar },
  } = data;

  const numConnections = connectionsData ? connectionsData.length : 0;
  const numPosts = postsData ? postsData.length : 0;

  return (
    <BoxContainer>
      <PhotoContainer>
        <Photo src={avatar} alt={name} />
        <Name>{name}</Name>
        <Status>{status}</Status>
        <Location>{location}</Location>
      </PhotoContainer>

      <ConnectionsPostsContainer>
        <ConnectionsBox>
          <ConnectionsCount>{numConnections}</ConnectionsCount>
          <ConnectionsText>connection(s)</ConnectionsText>
        </ConnectionsBox>
        <PostsBox>
          <PostsCount>{numPosts}</PostsCount>
          <PostsText>post(s)</PostsText>
        </PostsBox>
      </ConnectionsPostsContainer>

      <SocialMediaContainer>
        <SocialLink type="handle" url="/" label={handle} />
        <SocialLink type="email" url={`mailto:${email}`} label={email} />
        <SocialLink
          type="website"
          url={`http://${website}`}
          label={website}
          target="_blank"
        />
        <SocialLink
          type="github"
          url={`https://github.com/${github}`}
          label={github}
          target="_blank"
        />
        <SocialLink type="linkedin" url="#" label={linkedIn} target="_blank" />
      </SocialMediaContainer>

      {!userId && (
        <BtnLinkEditPrimary to="/profile/edit/main">
          Edit Profile
        </BtnLinkEditPrimary>
      )}
    </BoxContainer>
  );
};

export default ProfileBaseBox;
