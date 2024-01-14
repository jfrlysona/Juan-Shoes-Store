import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../Layout/Header";
import Navbar from "../../Layout/Navbar";
import NavbarHeading from "../../Layout/NavbarHeading";
import DetailProduct from "../../components/DetailProduct";
import Footer from "../../Layout/Footer";

function DetailsPage() {
  return (
    <div>
      <Helmet>
        <title>Juan - Shoes Store | Details</title>
        <link
          rel="shortcut icon"
          href="https://htmldemo.net/juan/juan/assets/img/favicon.ico"
        />
      </Helmet>
      <NavbarHeading />
      <Navbar />
      <Header
        title="Product Details"
        prevLink="/shop"
        currentLink="/details/:id"
        prevPage="Shop"
        currentPage="Product Details"
      />
      <DetailProduct />
      <Footer />
    </div>
  );
}

export default DetailsPage;
