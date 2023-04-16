import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import formCard from './formSlice';
import { rickAndMortyApi } from './rickAndMortyApi';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    formCard: formCard,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
  middleware: (getDefaultMidlware) => getDefaultMidlware().concat(rickAndMortyApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
