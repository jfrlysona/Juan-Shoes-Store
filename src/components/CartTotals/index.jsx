import React from "react";
import { Link } from "react-router-dom";

function CartTotals() {
  return (
    <div className="cart-totals">
      <table>
        <thead>
          <tr>
            <th><h3>Cart Totals</h3></th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-totals-body">
            <td>
              Sub Total <span>$230</span>
            </td>
            <td>
              Shipping <span>$70</span>
            </td>
            <td>
              Total <span className="total-price">$300</span>
            </td>
              <Link>
                <button>PROCEED CHECKOUT</button>
              </Link>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CartTotals;
