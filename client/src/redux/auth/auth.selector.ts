import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectAuth = (state: RootState) => state.auth;

export const selectAuthToken = createSelector([selectAuth], auth => auth.token);

export const selectAuthStatus = createSelector(
  [selectAuth],
  auth => auth.status,
);

export const selectAuthError = createSelector([selectAuth], auth => auth.error);
