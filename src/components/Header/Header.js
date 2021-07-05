import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ sum, quantity }) => {
  return (
    <header className="shop-header row">
      <Link to="/" className="logo text-dark">
        ReStore
      </Link>
      <Link to="/cart" className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {quantity} items (${sum})
      </Link>
    </header>
  );
};

export default Header;
