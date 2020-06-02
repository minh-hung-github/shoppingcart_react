import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';
import Header from './Components/Common/Header';
import HomePage from './Containers/HomePage';
import ShopPage from './Containers/ShopPage';
import PromotionPage from './Containers/PromotionPage';
import ContactPage from './Containers/ContactPage';
import Benefit from './Components/Common/Benefit';
import Footer from './Components/Common/Footer';
import DetailPage from './Containers/DetailPage';
import ShoppingCart from './Components/Common/ShoppingCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/promotion" component={PromotionPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/products/shoppingcart" component={ShoppingCart} />
          <Route path="/products/:productId" component={DetailPage} />


        </Switch>
        <Benefit></Benefit>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
