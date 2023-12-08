import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";

function CartModal({ closeModal }) {
  const { cart, removeItem } = useContext(CartContext);
  const { countItem, priceItem } = cart.reduce(
    (accumulator, currentItem) => {
      accumulator.countItem += currentItem.count;
      accumulator.priceItem += currentItem.price * currentItem.count;
      return accumulator;
    },
    { countItem: 0, priceItem: 0 }
  );
  return (
    <div className="cart-modal">
      <div className="modal">
        <div className="close-modal" onClick={closeModal}>
          <i className="fa-sharp fa-regular fa-xmark"></i>
        </div>
        <div className="cart-modal-card-content">
          {cart.length ? (
            cart.map((x) => (
              <div className="cart-modal-card" key={x.id}>
                <div className="cart-modal-card-image">
                  <img src={x.image} alt="" />
                </div>
                <div className="cart-modal-card-textcontent">
                  <div className="cart-modal-card-text">
                    <Link to="#">
                      <h4>{x.title}</h4>
                    </Link>
                    <p>
                      <span className="modal-count">{x.count}</span>×
                      <span className="modal-price">${x.price}</span>
                    </p>
                  </div>
                  <div className="cart-modal-card-icon">
                    <i
                      className="fa-sharp fa-regular fa-xmark"
                      onClick={() => removeItem(x)}
                    ></i>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="empty-cart">Cart is empty</p>
          )}
        </div>
        <div className="modal-text">
          <p className="total-price-modal">
            Total <span>${priceItem.toFixed(2)}</span>
          </p>
        </div>
        <div className="modal-buttons">
          <Link to="/cart" className="modal-link">
            <button>
              <i className="fa-sharp fa-solid fa-cart-shopping"></i> VIEW CART
            </button>
          </Link>
          <Link to="" className="modal-link">
            <button>
              <i className="fa-sharp fa-solid fa-share"></i> CHECKOUT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
