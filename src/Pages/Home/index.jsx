import React from "react";
import { Helmet } from "react-helmet-async";
import NavbarHeading from "../../Layout/NavbarHeading";
import BrandsSlider from "../../components/BrandsSlider";
import ServicePolicy from "../../components/ServicePolicy";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Juan - Shoes Store | Home</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <NavbarHeading />
      <ServicePolicy />
      <BrandsSlider />
    </>
  );
}

export default HomePage;
