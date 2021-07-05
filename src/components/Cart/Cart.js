import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th>Action</th>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Site Reliability Engineering</td>
            <td>2</td>
            <td>$40</td>
            <td className="button-container">
              <button className="btn btn-outline-danger btn-sm float-right">Del</button>
              <button className="btn btn-outline-success btn-sm float-right">+</button>
              <button className="btn btn-outline-warning btn-sm float-right">-</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="total">Total: $201</div>
    </div>
  );
};

export default Cart;
