import React from "react";
import Navbar from "../../Layout/Navbar";
import NavbarHeading from "../../Layout/NavbarHeading";
import ProductCards from "../../components/ProductCards";
import Header from "../../Layout/Header";
function ShopPage() {
  return (
    <>
      <NavbarHeading />
      <Navbar />
      <Header
        title="shop"
        prevLink="/"
        currentLink="/shop"
        prevPage="Home"
        currentPage="Shop"
      />
      <ProductCards />
    </>
  );
}

export default ShopPage;
