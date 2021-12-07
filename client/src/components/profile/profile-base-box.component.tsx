import React, { MouseEventHandler, useState } from 'react';

import SocialLink from './social-link.component';
import Modal from '../modal/modal.component';

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

import {
  ButtonPrimary,
  ButtonLinkPrimary,
  BtnLinkEditPrimary,
} from '../UI/button.component';
import IconEdit from '../icons/icon-edit.component';

const ProfileBaseBox: React.FC = () => {
  const [modalHidden, setModalHidden] = useState(true);

  const handleToggleModalHidden: MouseEventHandler<HTMLButtonElement> = e => {
    setModalHidden(false);
    console.log('base', modalHidden);
  };

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

        <BtnLinkEditPrimary to="/profile/edit/main">
          Edit Profile
        </BtnLinkEditPrimary>

        {/*<ButtonPrimary onClick={handleToggleModalHidden}>*/}
        {/*  Edit Contact Details*/}
        {/*</ButtonPrimary>*/}
      </BoxContainer>

      {/*<Modal isHidden={modalHidden} setModalHidden={setModalHidden} />*/}
    </>
  );
};

export default ProfileBaseBox;
