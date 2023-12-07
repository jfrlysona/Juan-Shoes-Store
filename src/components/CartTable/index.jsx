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
            <th>PRODUCT</th>
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
                <td style={{maxWidth:'595px'}}>{x.title}</td>
                <td>{x.price}</td>
                <td>
                  <span onClick={() => decreaseCount(x)}>-</span>
                  {x.count} <span onClick={() => increaseCount(x)}>+</span>
                </td>
                <td></td>
                <td>
                  <i
                    onClick={() => removeItem(x)}
                    className="fa-light fa-trash-can"
                  ></i>
                </td>
              </tr>
            ))
          ) : (
            <p>Cart is empty</p>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
