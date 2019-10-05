import React, { Component } from 'react';
import CartItem from './CartItem';
import './Cart.scss';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
    };
  }
  checkCart = e => {
    const { showCart } = this.state;
    this.setState({
      showCart: !showCart,
    });
  };
  render() {
    const { cartData } = this.props;
    const { showCart } = this.state;
    let cartContentNode = <span>empty cart</span>;
    if (cartData.length) {
      cartContentNode = cartData.map((cart, index) => {
        return <CartItem itemData={cart} key={index} />;
      });
    }
    return (
      <div className="section-cart">
        <div
          className={showCart ? `cart-title selected-cart` : `cart-title`}
          onClick={this.checkCart}
        >
          My Cart ({cartData.length})
        </div>
        {showCart && <div className="cart-box">{cartContentNode}</div>}
      </div>
    );
  }
}

export default Cart;
