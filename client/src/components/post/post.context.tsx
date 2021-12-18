import React from 'react';

interface PostContextType {
  commentsCount: number;
  setCommentsCount: (commentsCount: number) => void;
}

export const PostContext = React.createContext<PostContextType>({
  commentsCount: 0,
  setCommentsCount: (commentsCount: number) => {},
});
