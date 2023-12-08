import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

function CartTable() {
  const { cart, increaseCount, decreaseCount, removeItem } =
    useContext(CartContext);
  return (
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
                  <img src={x.image} alt="card item" />
                </td>
                <td className="product-name">
                  <a href="#">{x.title}</a>
                </td>
                <td>${x.price}</td>
                <td>
                  <div className="count-item">
                    <span onClick={() => decreaseCount(x)}>-</span>
                    <span className="count">{x.count} </span>
                    <span onClick={() => increaseCount(x)}>+</span>
                  </div>
                </td>
                <td>${x.price * x.count}</td>
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
    </div>
  );
}

export default CartTable;
