import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthState, AuthStatusType, FullfilledPayload } from './auth.type';

const initialState: AuthState = {
  token: undefined,
  status: AuthStatusType.Unauthenticated,
  error: undefined,
};

export const signInAsync = createAsyncThunk(
  'auth/signInAsync',
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await axios.post('/api/auth/signin', {
        email,
        password,
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
      state.status = AuthStatusType.Unauthenticated;
      state.error = undefined;
    },
  },
  extraReducers: builder => {
    builder.addCase(signInAsync.pending, state => {
      state.token = undefined;
      state.status = AuthStatusType.Pending;
      state.error = undefined;
    });
    builder.addCase(signInAsync.rejected, (state, action) => {
      state.token = undefined;
      state.status = AuthStatusType.Unauthenticated;
      state.error = action.payload;
    });
    builder.addCase(
      signInAsync.fulfilled,
      (state, action: PayloadAction<FullfilledPayload>) => {
        state.status = AuthStatusType.Authenticated;
        state.error = undefined;
        state.token = action.payload.access_token;
      },
    );
  },
});

export const { signout, setToken, clearAuthError } = authSlice.actions;

export const authReducer = authSlice.reducer;
