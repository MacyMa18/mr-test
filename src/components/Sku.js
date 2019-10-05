import React, { Component } from 'react';
import './Sku.scss';

class Sku extends Component {
  render() {
    return (
      <div className="section-sku">
        <div>
          SIZE<span className="sku-size-required">*</span>
          <div className="sku-size-wrapper">
            <div className="sku-size-item">S</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sku;
