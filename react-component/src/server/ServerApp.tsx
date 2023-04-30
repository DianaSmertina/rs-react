import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../App';
import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '../redux/store';

export function render(url: string, opts?: object) {
  const stream = renderToPipeableStream(
    <Provider store={setupStore()}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    opts
  );
  return stream;
}
