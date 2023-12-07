import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function HomeHeaderSlider() {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    // arrows: true,
    // nextArrow: <i className="fa-solid fa-arrow-right"></i>,
    // prevArrow: <i className="fa-solid fa-arrow-left"></i>,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="header-home">
      <div>
        <Slider {...settings} className="header-home-slider">
          <div className="slider1">
            <h5>Top Selling!</h5>
            <h1>New Collection</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incidid
            </p>
            <Link to="/shop" className="btn-slider">
              <button>SHOP NOW</button>
            </Link>
          </div>
          <div className="slider2">
            <h5>Best Selling!</h5>
            <h1>Top Collection</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incidid
            </p>
            <Link to="/shop" className="btn-slider">
              <button>SHOP NOW</button>
            </Link>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default HomeHeaderSlider;
