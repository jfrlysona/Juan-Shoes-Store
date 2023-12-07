import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Layout/Navbar";
import NavbarHeading from "../../Layout/NavbarHeading";
import BrandsSlider from "../../components/BrandsSlider";
import HomeHeaderSlider from "../../components/HomeHeaderSlider";
import ServicePolicy from "../../components/ServicePolicy";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Juan - Shoes Store | Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <NavbarHeading />
      <Navbar />
      <HomeHeaderSlider />
      <ServicePolicy />
      <BrandsSlider />
    </>
  );
}

export default HomePage;
