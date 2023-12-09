import React from "react";
import Navbar from "../../Layout/Navbar";
import NavbarHeading from "../../Layout/NavbarHeading";
import WishlistTable from "../../components/WishlistTable";
import Header from "../../Layout/Header";

function Wishlist() {
  return (
    <>
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
