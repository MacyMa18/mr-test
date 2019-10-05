import React, { Component } from 'react';
import CartItem from './CartItem';
import './Cart.scss';

class Cart extends Component {
  render() {
    const { cartData } = this.props;
    console.log('cartData: ', cartData);
    let cartContentNode = <span>empty cart</span>;
    if (cartData.length) {
      cartContentNode = cartData.map((cart, index) => {
        return <CartItem itemData={cart} key={index} />;
      });
    }
    return (
      <div className="section-wrapper section-cart">
        <div className="cart-title">My Cart ({cartData.length})</div>
        <div className="cart-box">{cartContentNode}</div>
      </div>
    );
  }
}

export default Cart;
