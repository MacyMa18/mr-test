import React, { Component } from 'react';
import Cart from './Cart';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="section-wrapper section-header">
        <div className="section">
          <Cart />
        </div>
      </div>
    );
  }
}

export default Header;
