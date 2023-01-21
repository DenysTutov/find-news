import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net';

export const fetchArticles = createAsyncThunk(
  'article/fetchArticles',
  async param => {
    const { data: articles } = await axios.get(
      `/v3/articles?_limit=10&${param.search}`
    );
    const { data: count } = await axios.get(
      `/v3/articles/count?${param.search}`
    );

    return { articles, count };
  }
);

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
    [fetchArticles.pending]: state => {
      state.status = 'pending';
      state.items = [];
      state.count = 0;
    },
    [fetchArticles.fulfilled]: (state, { payload }) => {
      state.items = payload.articles;
      state.count = payload.count;
      state.status = 'success';
    },
    [fetchArticles.rejected]: state => {
      state.status = 'error';
      state.items = [];
      state.count = 0;
    },
  },
});

export const selectorArticle = state => state.article;

export const { addItem } = articleSlice.actions;

export default articleSlice.reducer;
