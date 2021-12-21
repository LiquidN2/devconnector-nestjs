import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { authSlice } from './auth';
import { routesSlice } from './routes';
import { querySlice } from './query';
import { userApi } from './user';
import { profileApi } from './profile';
import { postApi } from './post';
import { likeApi } from './like';
import { commentApi } from './comment';
import { connectionApi } from './connection';
import { searchApi } from './search';

export const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [routesSlice.name]: routesSlice.reducer,
  [querySlice.name]: querySlice.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
  [postApi.reducerPath]: postApi.reducer,
  [likeApi.reducerPath]: likeApi.reducer,
  [commentApi.reducerPath]: commentApi.reducer,
  [connectionApi.reducerPath]: connectionApi.reducer,
  [searchApi.reducerPath]: searchApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [authSlice.name, routesSlice.name],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
