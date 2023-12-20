import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetails() {
  const [detailsBlog, setdetailsBlog] = useState([]);
  const { blogId } = useParams();
  useEffect(() => {
    fetch(
      "https://6573c101f941bda3f2af1e82.mockapi.io/juan-store/api/v1/blogs/" +
        blogId
    )
      .then((res) => res.json())
      .then((data) => setdetailsBlog(data));
  }, []);
  return (
    <div className="blog-details">
      <div className="blog-details-container">
        <div className="blog-details-image">
          <img src={detailsBlog.image} alt="" />
        </div>
        <h1>{detailsBlog.title}</h1>
        <div className="blog-details-info">
          <p>
            <span>By: {detailsBlog.author}</span>
          </p>
          <p>
              {detailsBlog.createdAt && detailsBlog.createdAt.length > 0 && (
                <span>On: {detailsBlog.createdAt[0]}</span>
              )}
          </p>
        </div>
        <div className="blog-details-text">
          <p>{detailsBlog.description}</p>
          <div className="blog-details-blockquote">
            <p>{detailsBlog.blockquote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
