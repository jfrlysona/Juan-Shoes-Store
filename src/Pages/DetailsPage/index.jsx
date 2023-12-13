import React from "react";
import { Helmet } from "react-helmet-async";
import NavbarHeading from "../../Layout/NavbarHeading";
import Navbar from "../../Layout/Navbar";
import Header from "../../Layout/Header";
import DetailProduct from "../../components/DetailProduct";
import RelatedProducts from "../../components/RelatedProducts";

function DetailsPage() {
  return (
    <div>
      <Helmet>
        <title>Juan - Shoes Store | Details</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <NavbarHeading />
      <Navbar />
      <Header
        title="cart"
        prevLink="/shop"
        currentLink="/details/:id"
        prevPage="Shop"
        currentPage="Product Details"
      />
      <DetailProduct/>
      <RelatedProducts/>
    </div>
  );
}

export default DetailsPage;
