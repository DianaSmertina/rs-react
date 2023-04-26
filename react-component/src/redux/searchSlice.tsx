// import * as ReduxToolkit from '@reduxjs/toolkit/dist/index.js';

// const { createSlice } = ReduxToolkit;
// import { createSlice } from '@reduxjs/toolkit';
// import pkg from '@reduxjs/toolkit';
// const { createSlice } = pkg;
import * as toolkitRaw from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { createSlice } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;

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
