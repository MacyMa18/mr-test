import React, { Component } from 'react';
import './CartItem.scss';

class CartItem extends Component {
  render() {
    const { itemData } = this.props;
    let selectedSkuName = '';

    itemData.sku_size.map(sku => {
      if (sku.sku_id === itemData.selectedSkuId) {
        selectedSkuName = sku.sku_name;
      }
    });
    return (
      <div className="section-wrapper section-cart-item">
        <div className="cart-item-image">
          <img src={itemData.images} alt="cart-product-image" />
        </div>
        <div className="cart-item-info">
          <span className="cart-item-info-content">{itemData.name}</span>
          <span className="cart-item-info-content">
            {itemData.quantity} X{' '}
            <strong itemProp="price">
              {itemData.unit}
              {itemData.price}
            </strong>
          </span>
          <span className="cart-item-info-content">
            Size: {selectedSkuName}
          </span>
        </div>
      </div>
    );
  }
}

export default CartItem;
