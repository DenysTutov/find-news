import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../../services/articlesApi';

export const getArticles = createAsyncThunk('article/getArticles', async () => {
  try {
    const data = await API.fetchArticles();
    return data;
  } catch (error) {
    return error;
  }
});

export const getArticlesBySearch = createAsyncThunk(
  'article/getArticlesBySearch',
  async param => {
    try {
      const data = await API.fetchArticlesBySearch(param);
      return data;
    } catch (error) {
      return error;
    }
  }
);
