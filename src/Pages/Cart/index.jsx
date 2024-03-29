import React from "react";
import NavbarHeading from "../../Layout/NavbarHeading";
import Navbar from "../../Layout/Navbar";
import CartTable from "../../components/CartTable";
import Header from "../../Layout/Header";
import { Helmet } from "react-helmet-async";
import Footer from "../../Layout/Footer";

function Cart() {
  return (
    <>
      <Helmet>
        <title>Juan - Shoes Store | Cart</title>
        <link
          rel="shortcut icon"
          href="https://htmldemo.net/juan/juan/assets/img/favicon.ico"
        />
      </Helmet>
      <NavbarHeading />
      <Navbar />
      <Header
        title="cart"
        prevLink="/shop"
        currentLink="/cart"
        prevPage="Shop"
        currentPage="Cart"
      />
      <CartTable />
      <Footer />
    </>
  );
}

export default Cart;
