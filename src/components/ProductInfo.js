import React, { Component } from 'react';
import Sku from './Sku';
import './ProductInfo.scss';

class ProductInfo extends Component {
  render() {
    const { info } = this.props;
    return (
      <div className="section-product-info">
        <h2 itemProp="name" className="product-name">
          {info.name}
        </h2>
        <div className="product-price">
          <span itemProp="price">
            {info.unit}
            {info.price}
          </span>
        </div>
        <p className="product-description">{info.description}</p>
        <Sku
          skuData={info.sku_size}
          selectedSkuId={info.selectedSkuId}
          selectSku={this.props.selectSku}
        />
        <div className="add-to-cart" onClick={this.props.addToCart}>
          ADD TO CART
        </div>
      </div>
    );
  }
}

export default ProductInfo;
