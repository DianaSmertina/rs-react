import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };

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
