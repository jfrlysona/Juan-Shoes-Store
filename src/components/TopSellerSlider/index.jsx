import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Tooltip } from "react-tooltip";
import { CartContext } from "../../context/CartProvider";
import { WishlistContext } from "../../context/WIshlistProvider";
import QuickView from "../QuickView";

function TopSellerSlider() {
  const { addCart } = useContext(CartContext);
  const { addWishlist } = useContext(WishlistContext);
  const [topSellers, setTopSellers] = useState([]);
  const [openQuickView, setOpenQuickView] = useState(false);
  const openQuickViewModal = () => {
    document.body.classList.add("overflow-hidden");
  };
  const closeQuickViewModal = () => {
    document.body.classList.remove("overflow-hidden");
  };
  useEffect(() => {
    fetch(
      "https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products"
    )
      .then((res) => res.json())
      .then((data) => setTopSellers(data.slice(0, 8)));
  }, []);
  const settings = {
    centerMode: false,
    infinite: true,
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    arrows: false,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="top-seller-slider">
      {topSellers.map((x) => (
        <div className="top-seller-card">
          <div className="top-seller-card-img">
            <Link to={"/details/" + x.id}>
            <img src={x.thumbnail} alt="card image" />
            </Link>
          </div>
          <div className="top-seller-card-content">
            <div className="top-seller-card-text">
              <Link to={"/details/" + x.id} className="title">
                {x.name}
              </Link>
              <p>
                ${x.price.toFixed(2)}
                <span>
                  {x?.oldPrice !== undefined
                    ? `$${x?.oldPrice.toFixed(2)}`
                    : ""}
                </span>
              </p>
              <div className="stars">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
              </div>
            </div>
            <div className="top-seller-card-icons">
              <div
                className="top-seller-card-icon heart"
                onClick={() => addWishlist(x)}
                data-tooltip-id="wishlist"
              >
                <i className="fa-sharp fa-light fa-heart"></i>
              </div>
              <Tooltip
                id="wishlist"
                content="Wishlist"
                events={["hover"]}
                style={{ padding: "5px", fontSize: "13px" }}
              />
              <div
                className="top-seller-card-icon bag"
                onClick={() => addCart(x)}
                data-tooltip-id="add-to-cart"
              >
                <i className="fa-sharp fa-light fa-bag-shopping"></i>
              </div>
              <Tooltip
                id="add-to-cart"
                content="Add To Cart"
                events={["hover"]}
                style={{ padding: "5px", fontSize: "13px" }}
              />
              <div
                className="top-seller-card-icon eye"
                data-tooltip-id="quick-view"
                onClick={() => {
                  setOpenQuickView(true);
                  openQuickViewModal();
                }}
              >
                <i className="fa-sharp fa-light fa-eye"></i>
              </div>
              {openQuickView ? (
                <QuickView
                  id={x.id}
                  closeModalView={() => {
                    setOpenQuickView(false);
                    closeQuickViewModal();
                  }}
                />
              ) : null}
              <Tooltip
                id="quick-view"
                content="Quick View"
                events={["hover"]}
                style={{ padding: "5px", fontSize: "13px" }}
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default TopSellerSlider;
