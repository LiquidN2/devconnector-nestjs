import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QueryState } from './query.type';

const initialState: QueryState = {
  value: '',
};

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },

    clearQuery: state => {
      state.value = '';
    },
  },
});

export const { setQuery, clearQuery } = querySlice.actions;
