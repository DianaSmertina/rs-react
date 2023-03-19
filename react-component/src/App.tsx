import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/mainPage';
import { AboutPage } from './pages/about';
import { ErrorPage } from './pages/notFound';

export class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </>
    );
  }
}

export default App;
