import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RouteActionPayload, RouteSet, RoutesState } from './routes.type';

const initialState: RoutesState = {
  currentRoutes: [
    {
      url: '/posts',
      label: 'Posts',
    },
    {
      url: '/profile',
      label: 'Profile',
    },
    {
      url: '/connections',
      label: 'Connections',
    },
  ],
};

export const routesSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    setRoutes: (state, action: PayloadAction<RouteActionPayload>) => {
      switch (action.payload) {
        case RouteSet.ProfileEdit:
          state.currentRoutes = [
            {
              url: '/profile/edit/main',
              label: 'Main Profile',
            },
            {
              url: '/profile/edit/experience',
              label: 'Experience',
            },
            {
              url: '/profile/edit/education',
              label: 'Education',
            },
          ];
          break;

        case RouteSet.Default:
        default:
          state.currentRoutes = initialState.currentRoutes;
      }
    },
  },
});

export const { setRoutes } = routesSlice.actions;

export const routesReducer = routesSlice.reducer;
