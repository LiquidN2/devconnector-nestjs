import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectQuery = (state: RootState) => state.query;

export const selectQueryValue = createSelector(
  [selectQuery],
  query => query.value,
);
