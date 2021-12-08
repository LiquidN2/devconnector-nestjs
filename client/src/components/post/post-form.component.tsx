import React, { FormEventHandler, useState } from 'react';

import Avatar from '../avatar/avatar.component';
import FormInput from '../form/form-input.component';
import IconCamera from '../icons/icon-camera.component';
import { PostFormContainer, BtnPhotoUpload } from './post-form.styles';

const PostForm: React.FC = () => {
  const [post, setPost] = useState('');

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault();
  };

  return (
    <PostFormContainer onSubmit={handleSubmit}>
      <Avatar src="/img/users/user-4.jpg" />
      <FormInput
        label=""
        value={post}
        handleChange={e => setPost(e.currentTarget.value)}
        placeholder="What's on your mind?"
      />
      <BtnPhotoUpload htmlFor="photo">
        <IconCamera />
        <input type="file" id="photo" />
      </BtnPhotoUpload>
    </PostFormContainer>
  );
};

export default PostForm;
