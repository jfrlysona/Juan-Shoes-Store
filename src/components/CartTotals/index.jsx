import React from "react";
import { Link } from "react-router-dom";

function CartTotals({ price }) {
  const shippingPrice = price * 0.1;
  const totalPrice = price + shippingPrice;
  return (
    <div className="cart-totals">
      <table>
        <thead>
          <tr>
            <th>
              <h3>Cart Totals</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-totals-body">
            <td>
              Sub Total <span>${price.toFixed(2)}</span>
            </td>
            <td>
              Shipping <span>${shippingPrice.toFixed(2)}</span>
            </td>
            <td>
              Total{" "}
              <span className="total-price">${totalPrice.toFixed(2)}</span>
            </td>
            <Link to="/checkout">
              <button>PROCEED CHECKOUT</button>
            </Link>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CartTotals;
