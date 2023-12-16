import React from "react";
import Navbar from "../../Layout/Navbar";
import NavbarHeading from "../../Layout/NavbarHeading";
import ProductCards from "../../components/ProductCards";
import Header from "../../Layout/Header";
import { Helmet } from "react-helmet-async";
import Footer from "../../Layout/Footer";
function ShopPage() {
  return (
    <>
      <Helmet>
        <title>Juan - Shoes Store | Shop</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
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
      <Footer />
    </>
  );
}

export default ShopPage;
