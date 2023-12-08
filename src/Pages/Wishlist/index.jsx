import React from "react";
import Navbar from "../../Layout/Navbar";
import NavbarHeading from "../../Layout/NavbarHeading";
import WishlistTable from "../../components/WishlistTable";

function Wishlist() {
  return (
    <>
      <NavbarHeading />
      <Navbar />
      <WishlistTable />
    </>
  );
}

export default Wishlist;
