import React from "react";
import NavbarHeading from "../../Layout/NavbarHeading";
import Navbar from "../../Layout/Navbar";
import CartTable from "../../components/CartTable";

function Cart() {
  return (
    <>
      <NavbarHeading />
      <Navbar />
      <CartTable />
    </>
  );
}

export default Cart;
