import { combineReducers } from '@reduxjs/toolkit';

import { authReducer, AuthState } from './auth';

interface AppState {
  auth: AuthState;
}

export const rootReducer = combineReducers<AppState>({
  auth: authReducer,
});
