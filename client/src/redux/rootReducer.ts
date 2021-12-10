import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { authReducer } from './auth';
import { userApi, userApiReducer } from './user/user.api';

export const rootReducer = combineReducers({
  auth: authReducer,
  [userApi.reducerPath]: userApiReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
