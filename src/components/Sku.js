import React, { Component } from 'react';
import './Sku.scss';

class Sku extends Component {
  render() {
    const { skuData, selectedSkuId } = this.props;
    let selectedSkuName = '';

    skuData.map(sku => {
      if (sku.sku_id === selectedSkuId) {
        selectedSkuName = sku.sku_name;
      }
    });
    return (
      <div className="section-sku">
        <div>
          <span className="sku-size-title">SIZE</span>
          <span className="sku-size-required">* </span>
          <strong>{selectedSkuName}</strong>
          <div className="sku-size-wrapper">
            {skuData.map((sku, index) => {
              return (
                <div
                  className={
                    sku.sku_id === selectedSkuId
                      ? `sku-size-item selected-item`
                      : `sku-size-item`
                  }
                  key={sku.sku_id}
                  onClick={() => {
                    this.props.selectSku(sku.sku_id);
                  }}
                >
                  {sku.sku_name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Sku;
