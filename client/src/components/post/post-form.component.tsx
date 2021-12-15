import React, { FormEventHandler, useState } from 'react';

import Avatar from '../avatar/avatar.component';
import FormInput from '../form/form-input.component';
import IconCamera from '../icons/icon-camera.component';
import { PostFormContainer, BtnPhotoUpload } from './post-form.styles';
import { ButtonPrimary } from '../UI/button.component';

import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthToken } from '../../redux/auth/auth.selector';
import { useProfile } from '../../hooks/useProfile';
import { useCreatePostMutation } from '../../redux/post/post.api';

interface PostFormProps {
  target?: string;
}

const PostForm: React.FC<PostFormProps> = ({ target = '' }) => {
  const [text, setText] = useState('');

  const { data } = useProfile(target);
  const authToken = useAppSelector(selectAuthToken);
  const [createPost] = useCreatePostMutation();

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault();
    createPost({ token: authToken, body: { text, target } });
    setText('');
  };

  return (
    <PostFormContainer onSubmit={handleSubmit}>
      {data && data.user && (
        <Avatar src={data.user.avatar} alt={data.user.name} />
      )}
      <FormInput
        label=""
        value={text}
        handleChange={e => setText(e.currentTarget.value)}
        placeholder="What's on your mind?"
      />
      <BtnPhotoUpload htmlFor="photo">
        <IconCamera />
        <input type="file" id="photo" />
      </BtnPhotoUpload>
      <ButtonPrimary>Post</ButtonPrimary>
    </PostFormContainer>
  );
};

export default PostForm;
