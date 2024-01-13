import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-account">
          <h3>My Account</h3>
          <div className="links">
            <i className="fa-light fa-location-dot"></i>
            <p>184 Main Rd E, St Albans VIC 3021, Australia</p>
          </div>
          <div className="links">
            <i className="fa-sharp fa-light fa-envelope"></i>
            <p>
              Mail Us:
              <Link to="mailto:yourmail@domain.com">yourmail@gmail.com</Link>
            </p>
          </div>
          <div className="links">
            <i className="fa-sharp fa-light fa-phone"></i>
            <p>
              Phone: <Link to="tel:+ 00 254 254565"> + 00 254 254565</Link>
            </p>
          </div>
        </div>
        <div className="footer-categories">
          <h3>Categories</h3>
          <ul className="links">
            <li>
              <Link to="#">Ecommerce</Link>
            </li>
            <li>
              <Link to="#">Shopify</Link>
            </li>
            <li>
              <Link to="#">Prestashop</Link>
            </li>
            <li>
              <Link to="#">Opencart</Link>
            </li>
            <li>
              <Link to="#">Magento</Link>
            </li>
            <li>
              <Link to="#">Jigoshop</Link>
            </li>
          </ul>
        </div>
        <div className="footer-information">
          <h3>Information</h3>
          <ul className="links">
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
            <li>
              <Link to="#">Returns & Exchanges</Link>
            </li>
            <li>
              <Link to="#">Shipping & Delivery</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul className="links">
            <li>
              <Link to="#">Store Location</Link>
            </li>
            <li>
              <Link to="#">My Account</Link>
            </li>
            <li>
              <Link to="#">Orders Tracking</Link>
            </li>
            <li>
              <Link to="#">Size Guide</Link>
            </li>
            <li>
              <Link to="#">Shopping Rates</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <span onClick={scrollToTop}>
        <i className="fa-regular fa-chevron-up"></i>
      </span>
    </footer>
  );
}

export default Footer;
