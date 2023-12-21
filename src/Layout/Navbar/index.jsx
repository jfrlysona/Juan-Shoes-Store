import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CartModal from "../../components/CartModal";
import { CartContext } from "../../context/CartProvider";
import { Menu, MenuItem } from "@mui/material";

function Navbar() {
  const { cart } = useContext(CartContext);
  const [openCartModal, setOpenCartModal] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 480 ? setStickyNav(true) : setStickyNav(false);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav className={`${stickyNav ? "fixed" : ""} `}>
      <div className="nav">
        <div className="logo">
          <Link to="/">
            <img
              src="https://htmldemo.net/juan/juan/assets/img/logo/logo.png"
              alt="logo"
            />
          </Link>
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
          <i
            className="fa-sharp fa-light fa-gear-complex"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          ></i>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}><Link style={{margin:"0"}}>My account</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/login" style={{margin:"0"}}>Login</Link></MenuItem>
          </Menu>
          <Link to="/wishlist">
            <i class="fa-sharp fa-light fa-heart"></i>
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
