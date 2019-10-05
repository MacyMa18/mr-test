import React, { Component } from 'react';
import Sku from './Sku';
import './ProductInfo.scss';

class ProductInfo extends Component {
  render() {
    return (
      <div className="section-product-info">
        <h2 className="product-name">Classic Tee</h2>
        <div className="product-price">
          <span itemprop="price">$75.00</span>
        </div>
        <p className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Sku />
        <div className="add-to-cart">ADD TO CART</div>
      </div>
    );
  }
}

export default ProductInfo;
