import React from "react";
import { Link } from "react-router-dom";

function NotFoundContent() {
  return (
    <section className="notfound">
      <div className="notfound-container">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>Page not found</h2>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link to="/">
          <button>home page</button>
        </Link>
      </div>
    </section>
  );
}

export default NotFoundContent;
