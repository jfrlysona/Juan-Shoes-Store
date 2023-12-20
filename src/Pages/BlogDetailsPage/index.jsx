import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../Layout/Header";
import Navbar from "../../Layout/Navbar";
import NavbarHeading from "../../Layout/NavbarHeading";
import Footer from "../../Layout/Footer";
import BlogDetails from "../../components/BlogDetails";

function BlogDetailsPage() {
  return (
    <>
      <Helmet>
        <title>Juan - Shoes Store | Blog</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <NavbarHeading />
      <Navbar />
      <Header
        title="blog details"
        prevLink="/blog"
        currentLink="/blog-details/:id"
        prevPage="Blog"
        currentPage="Blog Details"
      />
      <BlogDetails />
      <Footer />
    </>
  );
}

export default BlogDetailsPage;
