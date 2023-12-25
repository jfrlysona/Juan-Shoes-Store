import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink, Link } from "react-router-dom";
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
            <input type="text" placeholder="Search Here..." />
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
        <div className="nav-menu-account">
          <ul>
            <li>
              <NavLink to="/my-account">My Account</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-menu-footer">
          <div className="nav-menu-links">
            <ul>
              <li>
              <i className="fa-solid fa-mobile-screen" style={{paddingRight:"15px"}}></i>
                <Link>0123456789</Link>
              </li>
              <li>
                <i className="fa-sharp fa-light fa-envelope" style={{paddingRight:"11px"}}></i>
                <Link>info@yourdomain.com</Link>
              </li>
            </ul>
          </div>
          <div className="nav-menu-media">
            <ul>
              <li>
                <Link><i className="fa-brands fa-facebook-f"></i></Link>
              </li>
              <li>
                <Link><i className="fa-brands fa-twitter"></i></Link>
              </li>
              <li>
                <Link><i className="fa-brands fa-pinterest-p"></i></Link>
              </li>
              <li>
                <Link><i className="fa-brands fa-linkedin-in"></i></Link>
              </li>
              <li>
                <Link><i className="fa-brands fa-youtube"></i></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
