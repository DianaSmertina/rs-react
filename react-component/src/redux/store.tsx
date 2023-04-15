import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import formCard from './formSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    formCard: formCard,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
