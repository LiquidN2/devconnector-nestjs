import React, { FormEventHandler, useState } from 'react';

import { FormContainer, BtnAddComment } from './comment-form.styles';

import FormInput from '../form/form-input.component';

import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthToken } from '../../redux/auth';
import { useCreateCommentMutation } from '../../redux/comment';

import { PostContext } from '../post/post.context';

interface CommentFormProps {
  postId: string;
}

const CommentForm: React.FC<CommentFormProps> = ({ postId }) => {
  const [text, setText] = useState('');

  const authToken = useAppSelector(selectAuthToken);
  const [createComment] = useCreateCommentMutation();

  return (
    <PostContext.Consumer>
      {({ commentsCount, setCommentsCount }) => {
        const handleSubmit: FormEventHandler = e => {
          e.preventDefault();

          const body = {
            text: text.trim(),
            post: postId.trim(),
          };

          if (!body.post || !body.text) return;

          createComment({ token: authToken, body });
          setCommentsCount(commentsCount + 1);
          setText('');
        };

        return (
          <FormContainer onSubmit={handleSubmit}>
            <FormInput
              label=""
              value={text}
              handleChange={e => setText(e.currentTarget.value)}
              type="textarea"
              placeholder="Put your comment here"
            />
            <BtnAddComment>Add Comment</BtnAddComment>
          </FormContainer>
        );
      }}
    </PostContext.Consumer>
  );
};

export default CommentForm;
