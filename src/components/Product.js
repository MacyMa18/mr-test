import React, { Component } from 'react';
import ProductImgs from './ProductImgs';
import ProductInfo from './ProductInfo';

import './Product.scss';

class Product extends Component {
  render() {
    const { productData } = this.props;

    return (
      <div className="section-wrapper section-product">
        <div className="section">
          <ProductImgs imgs={productData.images} />
          <ProductInfo
            info={productData}
            selectSku={this.props.selectSku}
            addToCart={this.props.addToCart}
          />
        </div>
      </div>
    );
  }
}

export default Product;
