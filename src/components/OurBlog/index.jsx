import React, { useEffect, useState } from "react";
import BlogCard from "../BlogCard";

function OurBlog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://6573c101f941bda3f2af1e82.mockapi.io/juan-store/api/v1/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data.slice(0,3)));
  }, []);
  return (
    <section id="ourBlog">
      <div className="ourBlog-text">
        <h1>Our Blog</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
      </div>
      <div className="ourBlog-cards">
      {blogs.map((x) => (
        <BlogCard key={x.id} title={x.title} author={x.author} date={x.createdAt[0]} blogId={x.id} img={x.image}/>
      ))}
      </div>
    </section>
  );
}

export default OurBlog;
