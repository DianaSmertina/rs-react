import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'Search',
  initialState: {
    searchText: '',
  },
  reducers: {
    setSearchText(state, action: { payload: string; type: string }) {
      state.searchText = action.payload;
    },
  },
});

export const { setSearchText } = searchSlice.actions;
export default searchSlice.reducer;
