import React from "react";
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";
import Navbar from "../../Layout/Navbar";
import NavbarHeading from "../../Layout/NavbarHeading";
import { Helmet } from "react-helmet-async";
import Login from "../../components/Login";

function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Juan - Shoes Store | Login</title>
        <link
          rel="shortcut icon"
          href="https://htmldemo.net/juan/juan/assets/img/favicon.ico"
        />
      </Helmet>
      <NavbarHeading />
      <Navbar />
      <Header
        title="Login"
        prevLink="/"
        currentLink="/login"
        prevPage="Home"
        currentPage="Login"
      />
      <Login />
      <Footer />
    </>
  );
}

export default LoginPage;
