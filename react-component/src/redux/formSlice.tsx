import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormDogCard } from '../types/types';

type SliceState = {
  formCards: Array<FormDogCard>;
};
const initialState: SliceState = { formCards: [] };

const formSlice = createSlice({
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
