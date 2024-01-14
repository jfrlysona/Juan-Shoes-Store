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
        <title>Juan - Shoes Store | Blog Details</title>
        <link
          rel="shortcut icon"
          href="https://htmldemo.net/juan/juan/assets/img/favicon.ico"
        />
      </Helmet>
      <NavbarHeading />
      <Navbar />
      <Header
        title="blog details"
        prevLink="/blog"
        currentLink="/blog-details/:blogId"
        prevPage="Blog"
        currentPage="Blog Details"
      />
      <BlogDetails />
      <Footer />
    </>
  );
}

export default BlogDetailsPage;
