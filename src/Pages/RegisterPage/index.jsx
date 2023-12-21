import React from "react";
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";
import Navbar from "../../Layout/Navbar";
import NavbarHeading from "../../Layout/NavbarHeading";
import { Helmet } from "react-helmet-async";
import SignUp from "../../components/SignUp";
function RegisterPage() {
  return (
    <>
      <Helmet>
        <title>Juan - Shoes Store | Register</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <NavbarHeading />
      <Navbar />
      <Header
        title="Register"
        prevLink="/login"
        currentLink="/register"
        prevPage="Login"
        currentPage="Register"
      />
      <SignUp />
      <Footer />
    </>
  );
}

export default RegisterPage;
