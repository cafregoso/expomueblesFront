import React, { useEffect, Fragment } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import Us from './pages/Us/Us';
import Webinars from './pages/Webinars/Webinars';
import NotFound from './pages/NotFound/NotFound';
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Creative from './pages/Creative/Creative';

import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout /> } className="App">
          <Route index element={
            <Fragment>
              <ScrollToTop /> 
              <Home />
            </Fragment>
          } />
          <Route path="webinars" element={
            <Fragment>
              <ScrollToTop /> 
              <Webinars />
            </Fragment>
          } />
          <Route path="productos/:id" element={
            <Fragment>
              <ScrollToTop /> 
              <Products />
            </Fragment>
          } />
          <Route path="producto/:id" element={
            <Fragment>
              <ScrollToTop />
              <ProductDetail />
            </Fragment>
          } />
          <Route path="nosotros" element={
            <Fragment>
              <ScrollToTop />
              <Us />
            </Fragment>
          } />
          <Route path="creativo" element={
            <Fragment>
              <ScrollToTop />
              <Creative />
            </Fragment>
          } />
          <Route path="*" element={
            <Fragment>
              <ScrollToTop />
              <NotFound />
            </Fragment>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
