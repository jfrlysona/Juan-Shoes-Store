import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";

function Details({ detailsProduct }) {
  const { cart, addCart, increaseCount, decreaseCount } =
    useContext(CartContext);

  const [selectedImage, setSelectedImage] = useState("");
  const [zoomed, setZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (detailsProduct.images && detailsProduct.images.length > 0) {
      setSelectedImage(detailsProduct.images[0]);
    } else {
      setSelectedImage(detailsProduct.thumbnail);
    }
  }, [detailsProduct]);

  const handleImageOptionClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleMouseMove = (e) => {
    const boundingBox = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - boundingBox.left;
    const y = e.clientY - boundingBox.top;

    setPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setZoomed(true);
  };

  const handleMouseLeave = () => {
    setZoomed(false);
  };
  return (
    <div className="product-details-container">
      <div className="product-details-images">
        <div
          className={`thumbnail-details ${zoomed ? "zoomed" : ""}`}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={selectedImage} alt="thumbnail" />
          {zoomed && (
            <div
              className="zoomed-image"
              style={{
                backgroundImage: `url(${selectedImage})`,
                backgroundPosition: `-${position.x * 1}px -${position.y * 1}px`,
              }}
            ></div>
          )}
        </div>
        <div className="images-option">
          {detailsProduct.images?.map((imageUrl, index) => (
            <div
              key={index}
              className="option-img"
              onClick={() => handleImageOptionClick(imageUrl)}
            >
              <img src={imageUrl} alt={`Product Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="product-details-content">
        <div className="details-text">
          <p className="title-details">{detailsProduct.name}</p>
          <span className="review">{detailsProduct.reviews} Review(s)</span>
          <p className="price">
            $
            {isNaN(detailsProduct.price)
              ? null
              : detailsProduct.price.toFixed(2)}
            <span>
              {detailsProduct?.oldPrice !== undefined
                ? `$${detailsProduct?.oldPrice.toFixed(2)}`
                : ""}
            </span>
          </p>
          <p className="description">{detailsProduct.description?.text}</p>
        </div>
        <div className="details-btn-group">
          <div className="add-btn-count">
            {cart.map((x) => {
              if (x.id === detailsProduct.id) {
                return (
                  <div className="count-details" key={x.id}>
                    <span onClick={() => decreaseCount(x)}>-</span>
                    <span className="count">{x.count} </span>
                    <span onClick={() => increaseCount(x)}>+</span>
                  </div>
                );
              }
              return null;
            })}
            {cart.every((x) => x.id !== detailsProduct.id) && (
              <div
                className="count-details"
                onClick={() => addCart(detailsProduct)}
              >
                <span>+</span>
              </div>
            )}
            <button
              className="add-btn-details"
              onClick={() => addCart(detailsProduct)}
            >
              <Link to={"/cart"}>ADD TO CART</Link>
            </button>
          </div>
          <p className="stock">
            <span>Availability:</span>
            <span
              className={`stock-status ${
                detailsProduct.stockStatus === "In Stock"
                  ? "greenDetails"
                  : "red"
              }`}
            >
              {detailsProduct.stockStatus}
            </span>
          </p>
          <div className="share">
            <span>Share:</span>
            <div className="medias-details">
              <div className="details-icon">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="details-icon">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="details-icon">
                <i className="fa-brands fa-pinterest"></i>
              </div>
              <div className="details-icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
