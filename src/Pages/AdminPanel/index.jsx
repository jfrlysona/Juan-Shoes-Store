import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../Layout/Footer";
import Navbar from "../../Layout/Navbar";
import NavbarHeading from "../../Layout/NavbarHeading";
import Admin from "../../components/Admin";

function AdminPanel() {
  return (
    <>
      {" "}
      <Helmet>
        <title>Juan - Shoes Store | Blog</title>
        <link
          rel="shortcut icon"
          href="https://htmldemo.net/juan/juan/assets/img/favicon.ico"
        />{" "}
      </Helmet>
      <NavbarHeading />
      <Navbar />
      <Admin />
      <Footer />
    </>
  );
}

export default AdminPanel;
