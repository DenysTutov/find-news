import { createSlice } from '@reduxjs/toolkit';
import { getArticles, getArticlesBySearch } from './articlesOperations';

const initialState = {
  items: [],
  status: '',
  count: 0,
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    addItems: (state, { payload }) => {
      state.items = payload;
    },
  },

  extraReducers: {
    [getArticles.pending]: state => {
      state.status = 'pending';
      state.items = [];
      state.count = 0;
    },
    [getArticles.fulfilled]: (state, { payload }) => {
      state.items = payload.articles;
      state.count = payload.count;
      state.status = 'success';
    },
    [getArticles.rejected]: state => {
      state.status = 'error';
      state.items = [];
      state.count = 0;
    },

    //getArticlesBySearch
    [getArticlesBySearch.pending]: state => {
      state.status = 'pending';
      state.items = [];
      state.count = 0;
    },
    [getArticlesBySearch.fulfilled]: (state, { payload }) => {
      state.items = payload.articles;
      state.count = payload.count;
      state.status = 'success';
    },
    [getArticlesBySearch.rejected]: state => {
      state.status = 'error';
      state.items = [];
      state.count = 0;
    },
  },
});

export const selectorArticle = state => state.article;

export const { addItem } = articleSlice.actions;

export default articleSlice.reducer;
