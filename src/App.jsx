import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTER_ROUTES } from '@constants';
import NotFound from '@components/notFound/NotFound';
import MainPage from '@components/mainPage/MainPage';
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path={ROUTER_ROUTES.NOT_FOUND} element={<NotFound />} />
        <Route path={ROUTER_ROUTES.ROOT}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
