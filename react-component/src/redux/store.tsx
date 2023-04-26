// import * as ReduxToolkit from '@reduxjs/toolkit/dist/index.js';
import { PreloadedState } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import formCard from './formSlice';
import { rickAndMortyApi } from './rickAndMortyApi';

// const { combineReducers, configureStore } = ReduxToolkit;
import * as toolkitRaw from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { combineReducers, configureStore } = ((toolkitRaw as any).default ??
  toolkitRaw) as typeof toolkitRaw;

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
