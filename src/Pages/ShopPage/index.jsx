import React from "react";
import Navbar from "../../Layout/Navbar";
import NavbarHeading from "../../Layout/NavbarHeading";
import ProductCards from "../../components/ProductCards";
function ShopPage() {
  return (
    <>
      <NavbarHeading />
      <Navbar />
      <ProductCards />
    </>
  );
}

export default ShopPage;
