import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";
import Navbar from "../../Layout/Navbar";
import NavbarHeading from "../../Layout/NavbarHeading";
import ProductCards from "../../components/ProductCards";
function ShopPage() {
  const [currentPage, setCurrentPage] = useState(1);
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
      
      <ProductCards setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <Footer />
    </>
  );
}

export default ShopPage;
