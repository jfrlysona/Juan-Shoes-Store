import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CartModal from "../../components/CartModal";
import { CartContext } from "../../context/CartProvider";

function Navbar() {
  const { cart } = useContext(CartContext);
  const [openCartModal, setOpenCartModal] = useState(false);
  return (
    <nav>
      <div className="nav">
        <div className="logo">
          <img
            src="https://htmldemo.net/juan/juan/assets/img/logo/logo.png"
            alt=""
          />
        </div>
        <div className="navigation-pages">
          <ul>
            <li>
              <NavLink to="/" className="nav-link">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" className="nav-link">
                SHOP
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="nav-link">
                BLOG
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" className="nav-link">
                CONTACT US
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-icons">
          <i className="fa-sharp fa-regular fa-magnifying-glass"></i>
          <Link to="/wishlist">
            <i className="fa-sharp fa-light fa-gear-complex"></i>
          </Link>
          <i
            className="fa-sharp fa-light fa-bag-shopping"
            style={{ position: "relative" }}
            onClick={() => setOpenCartModal(true)}
          >
            <sup>{cart.length ? cart.length : ""}</sup>
          </i>
        </div>
      </div>
      {openCartModal ? (
        <CartModal closeModal={() => setOpenCartModal(false)} />
      ) : null}
    </nav>
  );
}

export default Navbar;
