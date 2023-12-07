import React from "react";
import { Helmet } from "react-helmet-async";
import NavbarHeading from "../../Layout/NavbarHeading";
import BrandsSlider from "../../components/BrandsSlider";
import ServicePolicy from "../../components/ServicePolicy";
// import HomeHeaderSlider from "../../components/HomeHeaderSlider";
import Navbar from "../../Layout/Navbar";
// import BannerHome from "../../components/BannerHome";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Juan - Shoes Store | Home</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <NavbarHeading />
      <Navbar />
      {/* <HomeHeaderSlider /> */}
      {/* <BannerHome /> */}
      <ServicePolicy />
      <BrandsSlider />
    </>
  );
}

export default HomePage;
