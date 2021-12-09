import React, { FormEventHandler, useState } from 'react';

import { FormContainer, BtnAddComment } from './comment-form.styles';

import FormInput from '../form/form-input.component';

const CommentForm: React.FC = () => {
  const [comment, setComment] = useState('');

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault();
    console.log(comment);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormInput
        label=""
        value={comment}
        handleChange={e => setComment(e.currentTarget.value)}
        type="textarea"
      />
      <BtnAddComment>Add Comment</BtnAddComment>
    </FormContainer>
  );
};

export default CommentForm;
