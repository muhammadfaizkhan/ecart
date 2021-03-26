import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/Navbar.jsx';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Product from './Components/Pages/Product/Product';
import Cart from './Components/Pages/Cart/Cart';
import ProductDetail from './Components/Pages/Product Details/ProductDetail';
import Products from './Components/Pages/Products/Products';
import Checkout from './Components/Pages/Checkout/Checkout';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Order from './Components/Pages/Checkout/Order'

function App() {  
  const promise = loadStripe(
    'pk_test_51IZNeRHdZDj62jxBu7zIscXnyno5cc87giW5sqHSoU7vFdJSw8G7A8rRY9Pgk3DcLRMS654ktK4Pofx9HokB4FGY00GLlwbJ5W'
  )
  
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar/>
            <Products/>
            <Footer/>
          </Route>
          <Route exact path="/cart">
            <Navbar/>
            <Cart/>
          </Route>
          <Route exact path="/product-details">
            <Navbar/>
            <ProductDetail/>
            <Footer/>
          </Route>
          <Route exact path="/payment">
            <Navbar/>
            <Elements stripe={promise}>
              <Checkout/>
            </Elements>
          </Route>
          <Route exact path="/orders">
            <Navbar/>
            <Order/>
          </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
