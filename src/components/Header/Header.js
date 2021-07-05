import React from "react";
import "./Header.css";

const Header = ({ sum, quantity }) => {
  return (
    <header className="shop-header row">
      <a className="logo text-dark" href="#">
        ReStore
      </a>
      <a className="shopping-cart" href="#">
        <i className="cart-icon fa fa-shopping-cart" />
        {quantity} items (${sum})
      </a>
    </header>
  );
};

export default Header;
