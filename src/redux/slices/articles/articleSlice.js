import { createSlice } from '@reduxjs/toolkit';
import { articlesApi } from './api';

const initialState = {
  items: [],
  count: 0,
};

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addItems: (state, { payload }) => {
      state.items = payload;
    },
  },

  extraReducers: builder => {
    builder.addMatcher(
      articlesApi.endpoints.getArticles.matchFulfilled,
      (state, { payload }) => {
        state.items = payload;
      }
    );

    builder.addMatcher(
      articlesApi.endpoints.getCount.matchFulfilled,
      (state, { payload }) => {
        state.count = payload;
      }
    );
  },
});

// Actions
export const { addItems } = articleSlice.actions;

// Reducer
export const articlesReducer = articleSlice.reducer;
