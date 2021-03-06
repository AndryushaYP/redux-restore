import React from "react";
import "./Cart.css";
import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart,
} from "../../actions/actions";
import { connect } from "react-redux";

const Cart = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  const renderRow = () => {
    return items.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.count}</td>
        <td>{item.total}</td>
        <td className="button-container">
          <button
            className="btn btn-outline-danger btn-sm float-right"
            onClick={() => onDelete(item.id)}
          >
            Del
          </button>
          <button
            className="btn btn-outline-success btn-sm float-right"
            onClick={() => onIncrease(item.id)}
          >
            +
          </button>
          <button
            className="btn btn-outline-warning btn-sm float-right"
            onClick={() => onDecrease(item.id)}
          >
            -
          </button>
        </td>
      </tr>
    ));
  };
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>{renderRow().map((item) => item)}</tbody>
      </table>

      <div className="total">Total: {total}</div>
    </div>
  );
};

const mapStateToProps = ({ shopingCart: { cartItems, totalPrice } }) => {
  return {
    items: cartItems,
    total: totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrease: (id) => dispatch(bookAddedToCart(id)),
    onDecrease: (id) => dispatch(bookRemovedFromCart(id)),
    onDelete: (id) => dispatch(allBooksRemovedFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
