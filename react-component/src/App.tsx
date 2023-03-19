import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/mainPage';
import { AboutPage } from './pages/about';
import { ErrorPage } from './pages/notFound';
import { Layout } from './components/layout';

export class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
