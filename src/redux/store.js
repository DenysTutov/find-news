import { configureStore } from '@reduxjs/toolkit';

import { articlesApi } from './slices/articles/api';
import { articlesReducer } from './slices/articles/articleSlice';
import searchSlice from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    search: searchSlice,
    articles: articlesReducer,
    [articlesApi.reducerPath]: articlesApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    articlesApi.middleware,
  ],
});
