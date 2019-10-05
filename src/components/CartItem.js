import React, { Component } from 'react';
import './CartItem.scss';

class CartItem extends Component {
  render() {
    return (
      <div className="section-wrapper section-cart-item">
        <div className="cart-item-image">
          <img src="" alt="cart-product-image" />
        </div>
        <div className="cart-item-info">
          <span className="cart-item-info-content">Classic Tee</span>
          <span className="cart-item-info-content">
            1 X <span itemProp="price">$75.00</span>
          </span>
          <span className="cart-item-info-content">Size: S</span>
        </div>
      </div>
    );
  }
}

export default CartItem;
