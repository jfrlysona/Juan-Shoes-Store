import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-account">
          <h3>My Account</h3>
          <i className="fa-light fa-location-dot"></i>
          <i className="fa-sharp fa-light fa-envelope"></i>
          <i className="fa-sharp fa-light fa-phone"></i>
        </div>
        <div className="footer-categories">
          <h3>Categories</h3>
        </div>
        <div className="footer-information">
          <h3>Information</h3>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
