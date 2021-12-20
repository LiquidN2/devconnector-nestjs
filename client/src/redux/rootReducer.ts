import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { authReducer } from './auth';
import { userApi } from './user/user.api';
import { profileApi } from './profile/profile.api';
import { postApi } from './post/post.api';
import { likeApi } from './like/like.api';
import { commentApi } from './comment/comment.api';
import { connectionApi } from './connection/connection.api';

export const rootReducer = combineReducers({
  auth: authReducer,
  [userApi.reducerPath]: userApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
  [postApi.reducerPath]: postApi.reducer,
  [likeApi.reducerPath]: likeApi.reducer,
  [commentApi.reducerPath]: commentApi.reducer,
  [connectionApi.reducerPath]: connectionApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
