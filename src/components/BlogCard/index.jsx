import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ title, author, date, blogId, img }) {
  return (
    <div className="blogcard">
      <div className="blogcard-img">
        <Link to={"/blog-details/" + blogId}>
          <img
            src={img}
            alt="blog card img"
          />
        </Link>
      </div>
      <div className="blogcard-text">
        <Link className="blogcard-title" to={"/blog-details/" + blogId}>
          {title}
        </Link>
        <div className="blogcard-info">
          <p>
            <span>By: </span>
            {author}
          </p>
          <p>
            <span>On: </span>
            {date}
          </p>
        </div>
        <Link to={"/blog-details/" + blogId}> Read More...</Link>
      </div>
    </div>
  );
}

export default BlogCard;
