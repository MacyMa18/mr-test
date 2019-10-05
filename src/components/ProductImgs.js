import React, { Component } from 'react';
import './ProductImgs.scss';

class ProductImgs extends Component {
  render() {
    return (
      <div className="section-product-imgs">
        {/* todo usually has many images and a slider but here just use one for demo */}
        <img
          itemProp="image"
          src={this.props.imgs[0]}
          alt="product-image"
          className="product-img"
        />
      </div>
    );
  }
}

export default ProductImgs;
