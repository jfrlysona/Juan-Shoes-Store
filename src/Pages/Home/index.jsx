import React from "react";
import { Helmet } from "react-helmet-async";
import NavbarHeading from "../../Layout/NavbarHeading";
import BrandsSlider from "../../components/BrandsSlider";
import ServicePolicy from "../../components/ServicePolicy";
import Navbar from "../../Layout/Navbar";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Juan - Shoes Store | Home</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <NavbarHeading />
      <Navbar/>
      <ServicePolicy />
      <BrandsSlider />
    </>
  );
}

export default HomePage;
