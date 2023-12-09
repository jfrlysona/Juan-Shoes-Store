import React from "react";
import NavbarHeading from "../../Layout/NavbarHeading";
import Navbar from "../../Layout/Navbar";
import CartTable from "../../components/CartTable";
import Header from "../../Layout/Header";

function Cart() {
  return (
    <>
      <NavbarHeading />
      <Navbar />
      <Header
        title="cart"
        prevLink="/"
        currentLink="/cart"
        prevPage="Home"
        currentPage="Cart"
      />
      <CartTable />
    </>
  );
}

export default Cart;
