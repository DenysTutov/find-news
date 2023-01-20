import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, { payload }) => {
      state.searchValue = payload;
    },
  },
});

export const selectorFilter = state => state.filter;

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
