import React from "react";
import { Link } from "react-router-dom";

function Header({ title, prevLink, currentLink, prevPage, currentPage }) {
  return (
    <div className="header">
      <div className="header-container">
        <h1>{title}</h1>
        <div className="header-links">
          <Link to={prevLink} className="header-link">
            {prevPage}
          </Link>
          /
          <Link to={currentLink} className="header-link activeLink">
            {currentPage}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
