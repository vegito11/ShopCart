import React from 'react';

import './App.css';
import { BrowserRouter  as Router,Route,Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import Default from './Components/Default';
import {ProductProvider} from './Components/ProductProvider'
function App() {
  return (
    <Router>
        <div className="App">
          <Navbar></Navbar>
          <ProductProvider>
            <Switch>
                <Route path="/details" component={ProductDetails} ></Route>
                <Route path="/cart" component={Cart} ></Route>
                <Route path="/about" component={ProductList} ></Route>
                <Route path="/" exact strict component={ProductList} ></Route>
                <Route component={Default} ></Route>
            </Switch>
          </ProductProvider>
 
          </div>
    </Router>
    
  );
}

export default App;
