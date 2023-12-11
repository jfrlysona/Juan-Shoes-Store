import React from "react";
import Navbar from "../../Layout/Navbar";
import NavbarHeading from "../../Layout/NavbarHeading";
import WishlistTable from "../../components/WishlistTable";
import Header from "../../Layout/Header";
import { Helmet } from "react-helmet-async";

function Wishlist() {
  return (
    <>
      <Helmet>
        <title>Juan - Shoes Store | Wishlist</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
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
    </>
  );
}

export default Wishlist;
