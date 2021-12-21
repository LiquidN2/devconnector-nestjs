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

interface ProfileBaseBoxProps {
  userId?: string;
  profileId?: string;
}

const ProfileBaseBox: React.FC<ProfileBaseBoxProps> = ({
  profileId = '',
  userId = '',
}) => {
  // const { data } = useProfile(profileId);
  const { data } = useProfileWithUserId(userId);

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
          <ConnectionsCount>300</ConnectionsCount>
          <ConnectionsText>connections</ConnectionsText>
        </ConnectionsBox>
        <PostsBox>
          <PostsCount>250</PostsCount>
          <PostsText>posts</PostsText>
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
