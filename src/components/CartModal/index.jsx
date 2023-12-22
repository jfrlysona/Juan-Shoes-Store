import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

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
  function handleLinkClick() {
    setTimeout(() => {
      window.location.reload();
    }, 200);
  }
  return (
    <div className="cart-modal">
      <div
        className="modal"
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="5000"
      >
        <div className="close-modal" onClick={() => closeModal()}>
          <i className="fa-sharp fa-regular fa-xmark"></i>
        </div>
        <div className="cart-modal-card-content">
          {cart.length ? (
            cart.map((x) => (
              <div className="cart-modal-card" key={x.id}>
                <div className="cart-modal-card-image">
                  <Link
                    to={"/details/" + x.id}
                    onClick={() => handleLinkClick()}
                  >
                    <img src={x.thumbnail} alt="" />{" "}
                  </Link>
                </div>
                <div className="cart-modal-card-textcontent">
                  <div className="cart-modal-card-text">
                    <Link
                      to={"/details/" + x.id}
                      onClick={() => handleLinkClick()}
                    >
                      <h4>{x.name}</h4>
                    </Link>
                    <p>
                      <span className="modal-count">{x.count}</span>×
                      <span className="modal-price">
                        ${isNaN(x.price) ? null : x.price.toFixed(2)}
                      </span>
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
          <Link to="/checkout" className="modal-link">
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
