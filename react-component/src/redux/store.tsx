import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import formCard from './formSlice';
import { rickAndMortyApi } from './rickAndMortyApi';

export const rootReducer = combineReducers({
  search: searchReducer,
  formCard: formCard,
  [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMidlware) => getDefaultMidlware().concat(rickAndMortyApi.middleware),
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
