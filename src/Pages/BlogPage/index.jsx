import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../Layout/Header";
import Navbar from "../../Layout/Navbar";
import NavbarHeading from "../../Layout/NavbarHeading";
import BlogCards from "../../components/BlogCards";
import Footer from "../../Layout/Footer";

function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Juan - Shoes Store | Blog</title>
        <link
          rel="shortcut icon"
          href="https://htmldemo.net/juan/juan/assets/img/favicon.ico"
        />{" "}
      </Helmet>
      <NavbarHeading />
      <Navbar />
      <Header
        title="blog"
        prevLink="/"
        currentLink="/blog"
        prevPage="Home"
        currentPage="Blog"
      />
      <BlogCards />
      <Footer />
    </>
  );
}

export default BlogPage;
