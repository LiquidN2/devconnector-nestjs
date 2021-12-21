import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { persistedReducer } from './rootReducer';

import { userApi } from './user';
import { profileApi } from './profile';
import { postApi } from './post';
import { likeApi } from './like';
import { commentApi } from './comment';
import { connectionApi } from './connection';
import { searchApi } from './search';

const middlewares = [
  userApi.middleware,
  profileApi.middleware,
  postApi.middleware,
  likeApi.middleware,
  commentApi.middleware,
  connectionApi.middleware,
  searchApi.middleware,
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
