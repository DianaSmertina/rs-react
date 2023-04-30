import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './style/index.scss';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';

hydrateRoot(
  document.getElementById('root') as Element,
  <Provider store={setupStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
