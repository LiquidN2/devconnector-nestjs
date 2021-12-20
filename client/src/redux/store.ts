import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { persistedReducer } from './rootReducer';

import { userApi } from './user/user.api';
import { profileApi } from './profile/profile.api';
import { postApi } from './post/post.api';
import { likeApi } from './like/like.api';
import { commentApi } from './comment/comment.api';
import { connectionApi } from './connection/connection.api';

const middlewares = [
  userApi.middleware,
  profileApi.middleware,
  postApi.middleware,
  likeApi.middleware,
  commentApi.middleware,
  connectionApi.middleware,
];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(...middlewares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
