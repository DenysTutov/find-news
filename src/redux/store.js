import { configureStore } from '@reduxjs/toolkit';

import articleSlice from './slices/articleSlice';
import searchSlice from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    article: articleSlice,
    search: searchSlice,
  },
});
