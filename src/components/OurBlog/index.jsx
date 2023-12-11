import React from "react";
import BlogCard from "../BlogCard";

function OurBlog() {
  return (
    <section id="ourBlog">
      <div className="ourBlog-text">
        <h1>OurBlog</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
      </div>
      <div className="ourBlog-cards">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
}

export default OurBlog;
