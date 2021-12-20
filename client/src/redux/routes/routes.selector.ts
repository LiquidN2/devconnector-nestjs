import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectRoutes = (state: RootState) => state.routes;

export const selectCurrentRoutes = createSelector(
  [selectRoutes],
  routes => routes.currentRoutes,
);
