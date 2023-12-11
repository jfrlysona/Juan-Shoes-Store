import React from "react";
import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <div className="blogcard">
      <div className="blogcard-img">
        <img
          src="https://htmldemo.net/juan/juan/assets/img/blog/blog-2.jpg"
          alt="blog card img"
        />
      </div>
      <div className="blogcard-text">
        <Link className="blogcard-title">
          Celebrity Daughter Opens About Upto Having Her Eye
        </Link>
        <div className="blogcard-info">
          <p>
            <span>By: </span>Admin
          </p>
          <p>
            <span>On: </span>12.12.1999
          </p>
        </div>
        <Link> Read More...</Link>
      </div>
    </div>
  );
}

export default BlogCard;
