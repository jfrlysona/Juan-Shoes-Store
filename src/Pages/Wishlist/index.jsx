import React from "react";
import Navbar from "../../Layout/Navbar";
import NavbarHeading from "../../Layout/NavbarHeading";
import WishlistTable from "../../components/WishlistTable";
import Header from "../../Layout/Header";
import { Helmet } from "react-helmet-async";
import Footer from "../../Layout/Footer";

function Wishlist() {
  return (
    <>
      <Helmet>
        <title>Juan - Shoes Store | Wishlist</title>
        <link
          rel="shortcut icon"
          href="https://htmldemo.net/juan/juan/assets/img/favicon.ico"
        />
      </Helmet>
      <NavbarHeading />
      <Navbar />
      <Header
        title="wishlist"
        prevLink="/"
        currentLink="/wishlist"
        prevPage="Home"
        currentPage="Wishlist"
      />
      <WishlistTable />
      <Footer />
    </>
  );
}

export default Wishlist;
