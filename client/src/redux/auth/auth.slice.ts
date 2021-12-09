import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { AuthState, AuthStatusType } from './auth.type';

const initialState: AuthState = {
  token: undefined,
  status: AuthStatusType.Unauthenticated,
  error: undefined,
};

export const signInAsync = createAsyncThunk(
  'auth/signInAsync',
  async ({ email, password }: { email: string; password: string }) => {
    const response = await axios.post('/api/auth/signin', {
      email,
      password,
    });
    return response.data.access_token;
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signInAsync.pending, (state, action) => {
      state.status = AuthStatusType.Pending;
      state.error = undefined;
    });
    builder.addCase(signInAsync.rejected, (state, action) => {
      state.status = AuthStatusType.Unauthenticated;
      state.error = action.error.message;
    });
    builder.addCase(signInAsync.fulfilled, (state, action) => {
      state.status = AuthStatusType.Authenticated;
      state.error = undefined;
      state.token = action.payload;
    });
  },
});

export const authReducer = authSlice.reducer;
