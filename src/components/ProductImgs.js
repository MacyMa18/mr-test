import React, { Component } from 'react';
import './ProductImgs.scss';

class ProductImgs extends Component {
  render() {
    return (
      <div className="section-product-imgs">
        <img src={this.props.img} alt="product-image" />
      </div>
    );
  }
}

export default ProductImgs;
