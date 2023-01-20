import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net';

export const fetchArticles = createAsyncThunk(
  'article/fetchArticles',
  async () => {
    const { data } = await axios.get(`/v3/articles`);
    return data;
  }
);

const initialState = {
  items: [],
  status: '',
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
    },
    [fetchArticles.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.status = 'success';
    },
    [fetchArticles.rejected]: state => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const selectorArticle = state => state.article;

export const { addItem } = articleSlice.actions;

export default articleSlice.reducer;
