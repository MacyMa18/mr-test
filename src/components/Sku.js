import React, { Component } from 'react';
import './Sku.scss';

class Sku extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skuData: props.skuData || [],
      selectedSkuId: props.selectedSkuId,
    };
  }
  render() {
    const { skuData, selectedSkuId } = this.state;
    let selectedSkuName = '';
    skuData.map(sku => {
      if (sku.sku_id === selectedSkuId) {
        selectedSkuName = sku.sku_name;
      }
    });
    return (
      <div className="section-sku">
        <div>
          SIZE<span className="sku-size-required">* {selectedSkuName}</span>
          <div className="sku-size-wrapper">
            {skuData.map((sku, index) => {
              return (
                <div className="sku-size-item" key={sku.sku_id}>
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
