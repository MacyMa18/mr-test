import React, { Component } from 'react';
import Header from './components/Header';
import Product from './components/Product';
import productData from './mock/products';
import cartData from './mock/cart';

import 'normalize.css';
import './App.scss';

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
  selectSku = skuId => {
    const { product, cart } = this.state;
    this.setState({
      product: {
        ...product,
        selectedSkuId: skuId,
      },
      cart,
    });
  };
  addToCart = () => {
    const { product, cart } = this.state;
    const selectedSkuId = product.selectedSkuId;
    // TODO
    if (!selectedSkuId) {
      alert('please select size!');
    }
    let cartItem = JSON.parse(JSON.stringify(product));
    cartItem.quantity = 1;

    if (cart.length) {
      const cartItemIndex = cart.findIndex(
        data =>
          data.id + data.selectedSkuId === cartItem.id + cartItem.selectedSkuId
      );

      if (cartItemIndex > -1) {
        cart[cartItemIndex].quantity += 1;
        this.setState({
          cart,
        });
      } else {
        const newCart = [...cart, cartItem];
        this.setState({
          cart: newCart,
        });
      }
    } else {
      const newCart = [...cart, cartItem];
      this.setState({
        cart: newCart,
      });
    }
  };
  render() {
    const { product, cart } = this.state;
    return (
      <div className="App">
        <Header cartData={cart} />
        <Product
          productData={product}
          selectSku={skuId => {
            this.selectSku(skuId);
          }}
          addToCart={this.addToCart}
        />
      </div>
    );
  }
}

export default App;
