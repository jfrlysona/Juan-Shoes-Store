import React, { useEffect, useState } from "react";
import BlogCard from "../BlogCard";
import ProductCards from "../ProductCards";
import PaginationRounded from "../Pagination";

function BlogCards() {
  const [blogs, setBlogs] = useState([]);
  const [paginatedBlogs, setPaginatedBlogs] = useState([]);
  const [blogsPerPage, setBlogsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://6573c101f941bda3f2af1e82.mockapi.io/juan-store/api/v1/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  useEffect(() => {
    const paginatedData = blogs.slice(
      (currentPage - 1) * blogsPerPage,
      currentPage * blogsPerPage
    );
    setPaginatedBlogs(paginatedData);
  }, [currentPage, blogsPerPage, blogs]);

  let totalPages = Math.ceil(blogs.length / blogsPerPage);
  return (
    <section id="blogs">
      <div className="blog-cards">
        {paginatedBlogs.map((x) => (
          <BlogCard
            key={x.id}
            title={x.title}
            author={x.author}
            date={x.createdAt[0]}
            blogId={x.id}
            img={x.image}
          />
        ))}
      </div>
      <PaginationRounded
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </section>
  );
}

export default BlogCards;
