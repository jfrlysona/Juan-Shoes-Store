import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";
import Navbar from "../../Layout/Navbar";
import NavbarHeading from "../../Layout/NavbarHeading";
import Checkout from "../../components/Checkout";

function CheckoutPage() {
  return (
    <>
      <Helmet>
        <title>Juan - Shoes Store | Checkout</title>
        <link
          rel="shortcut icon"
          href="https://htmldemo.net/juan/juan/assets/img/favicon.ico"
        />
      </Helmet>
      <NavbarHeading />
      <Navbar />
      <Header
        title="checkout"
        prevLink="/cart"
        currentLink="/checkout"
        prevPage="Cart"
        currentPage="Checkout"
      />
      <Checkout />
      <Footer />
    </>
  );
}

export default CheckoutPage;
