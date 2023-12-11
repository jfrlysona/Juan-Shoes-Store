import React from "react";

function BannerHome() {
  return (
    <section id="banner-home">
      <div className="banner-home-container">
        <div className="banner-home">
          <div className="banner-img">
            <img
              src="https://htmldemo.net/juan/juan/assets/img/banner/banner-1.jpg"
              alt="banner image"
            />
          </div>
          <div className="banner-content">
            <div className="banner-text1">
              <span>SPORTS SHOES</span>
              <h2>
                20% OFF <br /> FOR SPORTS MEN
              </h2>
            </div>
          </div>
        </div>
        <div className="banner-home">
          <div className="banner-img">
            <img
              src="https://htmldemo.net/juan/juan/assets/img/banner/banner-2.jpg"
              alt="banner image"
            />
          </div>
          <div className="banner-content">
            <div className="banner-text2">
              <span>SPORTS SHOES</span>
              <h2>
                20% OFF <br /> FOR SPORTS MEN
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerHome;
