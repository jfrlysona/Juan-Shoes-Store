import React, { useEffect, useState } from "react";
import BlogCard from "../BlogCard";
import ProductCards from "../ProductCards";

function BlogCards() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://6573c101f941bda3f2af1e82.mockapi.io/juan-store/api/v1/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      {blogs.map((x) => (
        <BlogCard key={x.id} title={x.title} author={x.author} date={x.createdAt[0]} blogId={x.id}/>
      ))}
    </div>
  );
}

export default BlogCards;
