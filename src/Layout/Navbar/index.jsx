import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";

function Navbar() {
  const { cart } = useContext(CartContext);
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
          <i className="fa-sharp fa-light fa-gear-complex"></i>
          <i
            className="fa-sharp fa-light fa-bag-shopping"
            style={{ position: "relative" }}
          >
            <sup>{cart.length ? cart.length : ""}</sup>
          </i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
