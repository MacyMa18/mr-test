import React, { Component } from 'react';
import ProductImgs from './ProductImgs';
import ProductInfo from './ProductInfo';

class Product extends Component {
  render() {
    return (
      <div className="section-wrapper section-product">
        <div className="section">
          <ProductImgs />
          <ProductInfo />
        </div>
      </div>
    );
  }
}

export default Product;
