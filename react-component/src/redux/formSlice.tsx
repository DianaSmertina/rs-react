// import * as ReduxToolkit from '@reduxjs/toolkit/dist/index.js';
import { PayloadAction } from '@reduxjs/toolkit';
import { FormDogCard } from '../types/types';

// const { createSlice } = ReduxToolkit;
// import pkg from '@reduxjs/toolkit';
// const { createSlice } = pkg;
import * as toolkitRaw from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { createSlice } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;

type SliceState = {
  formCards: Array<FormDogCard>;
};
const initialState: SliceState = { formCards: [] };

export const formSlice = createSlice({
  name: 'FormCards',
  initialState,
  reducers: {
    addFormCard(state, action: PayloadAction<FormDogCard>) {
      const card = action.payload;
      state.formCards.push(card);
    },
  },
});

export const { addFormCard } = formSlice.actions;
export default formSlice.reducer;
