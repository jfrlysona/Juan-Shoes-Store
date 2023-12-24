import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
AOS.init();
function NavMenu({ closeMenu }) {
  return (
    <div className="nav-menu-modal">
      <div
        className="nav-menu-container"
        data-aos="fade-right"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="5000"
      >
        <div className="close-menu">
          <i
            className="fa-sharp fa-regular fa-xmark"
            onClick={() => closeMenu()}
          ></i>
        </div>
        <div className="nav-menu-head">
          <div className="nav-input">
            <input type="text" />
            <i className="fa-sharp fa-regular fa-magnifying-glass"></i>
          </div>
          <div className="navigation-pages">
            <ul>
              <li>
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" className="nav-link">
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="nav-link">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" className="nav-link">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
