import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Layout/Navbar";
import NavbarHeading from "../../Layout/NavbarHeading";
import BrandsSlider from "../../components/BrandsSlider";
import HomeHeaderSlider from "../../components/HomeHeaderSlider";
import ServicePolicy from "../../components/ServicePolicy";
import OurProduct from "../../components/OurProduct";
import BannerHome from "../../components/BannerHome";
import OurBlog from "../../components/OurBlog";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Juan - Shoes Store | Home</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <NavbarHeading />
      <Navbar />
      <HomeHeaderSlider />
      <ServicePolicy />
      <OurProduct />
      <BannerHome />
      <OurBlog />
      <BrandsSlider />
    </>
  );
}

export default HomePage;
