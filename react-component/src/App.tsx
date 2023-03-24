import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/mainPage';
import { AboutPage } from './pages/aboutPage';
import { ErrorPage } from './pages/notFound';
import { Layout } from './components/layout';
import { FormPage } from './pages/formPage';

export class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="form" element={<FormPage />} />
            <Route path="/404" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
