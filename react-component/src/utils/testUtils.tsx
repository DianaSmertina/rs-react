import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
// import { configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import type { AppStore, RootState } from '../redux/store';
import { setupStore } from '../redux/store';
// import formReducer from '../redux/formSlice';
// import searchReducer from '../redux/searchSlice';
// import { rickAndMortyApi } from '../redux/rickAndMortyApi';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // store = configureStore({
    //   reducer: {
    //     search: searchReducer,
    //     formCard: formReducer,
    //     [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    //   },
    //   middleware: (getDefaultMidlware) => getDefaultMidlware().concat(rickAndMortyApi.middleware),
    //   preloadedState,
    // }),
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
