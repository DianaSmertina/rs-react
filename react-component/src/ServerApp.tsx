import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './redux/store';

const store = createStore(rootReducer);

export default function render(url: string, opts?: object) {
  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    opts
  );
  return stream;
}
