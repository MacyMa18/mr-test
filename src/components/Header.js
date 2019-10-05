import React, { Component } from 'react';
import Cart from './Cart';
import './Header.scss';

class Header extends Component {
  render() {
    const { cartData } = this.props;
    return (
      <div className="section-wrapper section-header">
        <div className="section header">
          <Cart cartData={cartData} />
        </div>
      </div>
    );
  }
}

export default Header;
