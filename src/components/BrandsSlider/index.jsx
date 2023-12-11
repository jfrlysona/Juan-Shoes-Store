import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function BrandsSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
    <section id="brands-logo">
      <Slider {...settings} className="slider-brands">
        <div>
          <img
            src="https://htmldemo.net/juan/juan/assets/img/brand/br1.png"
            alt="brand logo"
          />
        </div>
        <div>
          <img
            src="https://htmldemo.net/juan/juan/assets/img/brand/br2.png"
            alt="brand logo"
          />
        </div>
        <div>
          <img
            src="https://htmldemo.net/juan/juan/assets/img/brand/br3.png"
            alt="brand logo"
          />
        </div>
        <div>
          <img
            src="https://htmldemo.net/juan/juan/assets/img/brand/br4.png"
            alt="brand logo"
          />
        </div>
        <div>
          <img
            src="https://htmldemo.net/juan/juan/assets/img/brand/br5.png"
            alt="brand logo"
          />
        </div>
        <div>
          <img
            src="https://htmldemo.net/juan/juan/assets/img/brand/br1.png"
            alt="brand logo"
          />
        </div>
        <div>
          <img
            src="https://htmldemo.net/juan/juan/assets/img/brand/br2.png"
            alt="brand logo"
          />
        </div>
        <div>
          <img
            src="https://htmldemo.net/juan/juan/assets/img/brand/br3.png"
            alt="brand logo"
          />
        </div>
        <div>
          <img
            src="https://htmldemo.net/juan/juan/assets/img/brand/br4.png"
            alt="brand logo"
          />
        </div>
        <div>
          <img
            src="https://htmldemo.net/juan/juan/assets/img/brand/br5.png"
            alt="brand logo"
          />
        </div>
        <div>
          <img
            src="https://htmldemo.net/juan/juan/assets/img/brand/br3.png"
            alt="brand logo"
          />
        </div>
        <div>
          <img
            src="https://htmldemo.net/juan/juan/assets/img/brand/br2.png"
            alt="brand logo"
          />
        </div>
      </Slider>
    </section>
  );
}

export default BrandsSlider;
