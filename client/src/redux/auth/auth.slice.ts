import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  AuthState,
  AuthStatusType,
  FullfilledPayload,
  AuthRequestType,
  RejectedPayload,
} from './auth.type';

const initialState: AuthState = {
  token: undefined,
  status: AuthStatusType.Idle,
  error: undefined,
};

export const authenticateAsync = createAsyncThunk<
  FullfilledPayload,
  AuthRequestType,
  {}
>(
  'auth/authenticateAsync',
  async (
    { type, email, password, name = '', passwordConfirm = '' },
    { rejectWithValue },
  ) => {
    try {
      const response = await axios.post(`/api/auth/${type}`, {
        email,
        password,
        name, // To be filtered out by API server for signin
        passwordConfirm, // To be filtered out by APT server for signin
      });

      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuthError: state => {
      state.error = undefined;
    },

    setToken: (state, action: PayloadAction<string | undefined>) => {
      state.token = action.payload;
    },

    signout: state => {
      state.token = undefined;
      state.status = AuthStatusType.Idle;
      state.error = undefined;
    },
  },
  extraReducers: builder => {
    builder.addCase(authenticateAsync.pending, state => {
      state.token = undefined;
      state.status = AuthStatusType.Loading;
      state.error = undefined;
    });
    builder.addCase(authenticateAsync.rejected, (state, action) => {
      state.token = undefined;
      state.status = AuthStatusType.Rejected;
      state.error = action.payload;
    });
    builder.addCase(authenticateAsync.fulfilled, (state, action) => {
      state.status = AuthStatusType.Fulfilled;
      state.error = undefined;
      state.token = action.payload.access_token;
    });
  },
});

export const { signout, setToken, clearAuthError } = authSlice.actions;

export const authReducer = authSlice.reducer;
