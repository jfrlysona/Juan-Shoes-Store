import React from "react";
import TopSellerSlider from "../TopSellerSlider";

function TopSeller() {
  return (
    <section id="top-seller">
      <div className="top-seller-container">
        <div className="top-seller-title">
          <h1>Top Seller</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
        </div>
        <div className="top-seller-content">
          <div className="top-seller-img">
            <img src="https://htmldemo.net/juan/juan/assets/img/banner/banner-3.jpg" />
          </div>
          <TopSellerSlider />
        </div>
      </div>
    </section>
  );
}

export default TopSeller;
