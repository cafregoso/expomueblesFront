import React, { useEffect, Fragment } from 'react';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';

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
      <Switch >
        <Layout  className="App">
          <Route exact path="/" children={
            <Fragment>
              <ScrollToTop /> 
              <Home />
            </Fragment>
          } />
          <Route exact path="/productos" children={
            <Fragment>
              <ScrollToTop /> 
              <Products />
            </Fragment>
          } />
          <Route exact path="/producto" children={
            <Fragment>
              <ScrollToTop />
              <ProductDetail />
            </Fragment>
          } />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
