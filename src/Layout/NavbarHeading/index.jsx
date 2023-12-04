import React from "react";

function NavbarHeading() {
  return (
    <div className="navbar-heading">
      <div className="navbar-heading-container">
        <p>Welcome to Juan online store</p>
        <div className="select-group">
          <div className="select-currency">
            $ Dollar (US) <i className="fa-regular fa-chevron-down"></i>
          </div>
          <div className="select-lang">
            <img
              src="https://htmldemo.net/juan/juan/assets/img/icon/en.png"
              alt="britain flag"
            />
            English <i className="fa-regular fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarHeading;
