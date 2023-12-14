import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductCard from "../ProductCard";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className="arrow-next" onClick={onClick}>
      <i className="fa-regular fa-angle-right"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className="arrow-prev" onClick={onClick}>
      <i className="fa-regular fa-angle-left"></i>
    </div>
  );
}

function ProductsSlider({ detailsProduct }) {
  const [homeProducts, setHomeProducts] = useState([]);
  const dataLimit = 8;
  useEffect(() => {
    fetch(
      "https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products"
    )
      .then((res) => res.json())
      .then((data) => setHomeProducts(data));
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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

  const relatedTo =
    detailsProduct && detailsProduct.model
      ? homeProducts.filter(
          (product) =>
            product.model === detailsProduct.model &&
            product.id !== detailsProduct.id
        )
      : homeProducts.slice(0, dataLimit);

  return (
    <Slider {...settings} className="products-slider">
      {relatedTo &&
        relatedTo.map((x) => (
          <ProductCard
            key={x.id}
            title={x.name}
            price={x.price}
            oldPrice={x?.oldPrice}
            image={x.thumbnail}
            item={x}
          />
        ))}
    </Slider>
  );
}

export default ProductsSlider;
