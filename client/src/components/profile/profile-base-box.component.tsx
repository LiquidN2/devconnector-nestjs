import React from 'react';
import { useLocation } from 'react-router-dom';

import SocialLink from './social-link.component';

import {
  BoxContainer,
  PhotoContainer,
  Photo,
  Name,
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

const ProfileBaseBox: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <BoxContainer>
        <PhotoContainer>
          <Photo src="/img/users/user-4.jpg" />
          <Name>John Doe</Name>
          <Location>Sydney, NSW</Location>
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
          <SocialLink type="handle" url="#" label="jdoe" />
          <SocialLink
            type="email"
            url="mailto:jdoe@test.com"
            label="jdoe@test.com"
          />
          <SocialLink type="website" url="#" label="johndoe.io" />
          <SocialLink type="github" url="#" label="johndoedev" />
          <SocialLink type="linkedin" url="#" label="johndoe" />
        </SocialMediaContainer>

        {pathname.startsWith('/profile') && (
          <BtnLinkEditPrimary to="/profile/edit/main">
            Edit Profile
          </BtnLinkEditPrimary>
        )}
      </BoxContainer>
    </>
  );
};

export default ProfileBaseBox;
