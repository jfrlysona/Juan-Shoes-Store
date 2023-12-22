import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";
import CartTotals from "../CartTotals";

function CartTable() {
  const { cart, increaseCount, decreaseCount, removeItem } =
    useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);
  return (
    <section id="cart">
      <div className="cart-table">
        <table className="cart-table-container">
          <thead>
            <tr>
              <th>THUMBNAIL</th>
              <th style={{ width: "594px" }}>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
              <th>REMOVE</th>
            </tr>
          </thead>
          <tbody>
            {cart.length ? (
              cart.map((x) => (
                <tr key={x.id}>
                  <td>
                    <img src={x.thumbnail} alt="card item" />
                  </td>
                  <td className="product-name">
                    <Link to={"/details/" + x.id}>{x.name}</Link>
                  </td>
                  <td>${isNaN(x.price) ? null : x.price.toFixed(2)}</td>
                  <td>
                    <div className="count-item">
                      <span onClick={() => decreaseCount(x)}>-</span>
                      <span className="count">{x.count} </span>
                      <span onClick={() => increaseCount(x)}>+</span>
                    </div>
                  </td>
                  <td>${(x.price * x.count).toFixed(2)}</td>
                  <td>
                    <i
                      onClick={() => removeItem(x)}
                      className="fa-light fa-trash-can"
                    ></i>
                  </td>
                </tr>
              ))
            ) : (
              <p className="empty-cart">Cart is empty</p>
            )}
          </tbody>
        </table>
        <div className="coupon-code">
          <div className="coupon">
            <input type="text" placeholder="Enter Your Coupon Code" />
            <button>APPLY COUPON</button>
          </div>
          <Link to="/shop">
            <button>UPDATE CART</button>
          </Link>
        </div>
      </div>
      <div className="totals">
        <CartTotals price={total} />
      </div>
    </section>
  );
}

export default CartTable;
