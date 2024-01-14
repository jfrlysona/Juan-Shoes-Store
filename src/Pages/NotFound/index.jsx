import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../Layout/Footer";
import Navbar from "../../Layout/Navbar";
import NavbarHeading from "../../Layout/NavbarHeading";
import NotFoundContent from "../../components/NotFoundContent";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Juan - Shoes Store | Not Found</title>
        <link
          rel="shortcut icon"
          href="https://htmldemo.net/juan/juan/assets/img/favicon.ico"
        />
      </Helmet>
      <NavbarHeading />
      <Navbar />
      <NotFoundContent />
      <Footer />
    </>
  );
}

export default NotFound;
