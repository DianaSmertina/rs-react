import { PayloadAction } from '@reduxjs/toolkit';
import { FormDogCard } from '../types/types';
import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };

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
