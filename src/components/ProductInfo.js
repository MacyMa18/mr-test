import React, { Component } from 'react';
import Sku from './Sku';
import './ProductInfo.scss';

class ProductInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoData: props.info,
      skuData: props.info.sku_size,
      selectedSkuId: props.info.selectedSkuId,
    };
  }
  render() {
    const { infoData, skuData, selectedSkuId } = this.state;
    return (
      <div className="section-product-info">
        <h2 className="product-name">{infoData.name}</h2>
        <div className="product-price">
          <span itemProp="price">
            {infoData.unit}
            {infoData.price}
          </span>
        </div>
        <p className="product-description">{infoData.description}</p>
        <Sku skuData={skuData} selectedSkuId={selectedSkuId} />
        <div className="add-to-cart">ADD TO CART</div>
      </div>
    );
  }
}

export default ProductInfo;
