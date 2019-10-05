import React, { Component } from 'react';
import ProductImgs from './ProductImgs';
import ProductInfo from './ProductInfo';

class Product extends Component {
  render() {
    const { productData } = this.props;
    return (
      <div className="section-wrapper section-product">
        <div className="section">
          <ProductImgs img={productData.images} />
          <ProductInfo info={productData} />
        </div>
      </div>
    );
  }
}

export default Product;
