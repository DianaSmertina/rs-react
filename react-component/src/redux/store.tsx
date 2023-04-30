import { PreloadedState } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import formCard from './formSlice';
import { rickAndMortyApi } from './rickAndMortyApi';
import * as toolkitRaw from '@reduxjs/toolkit';
const { combineReducers, configureStore } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };

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
