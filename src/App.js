import React, { Component } from 'react';
import Header from './components/Header';
import Product from './components/Product';
import productData from './mock/products';
import cartData from './mock/cart';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        ...productData[0],
        selectedSkuId: null,
      },
      cart: cartData,
    };
  }
  render() {
    const { product, cart } = this.state;
    return (
      <div className="App">
        <Header cartData={cart} />
        <Product productData={product} />
      </div>
    );
  }
}

export default App;
