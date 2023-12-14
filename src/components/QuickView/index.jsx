import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";
AOS.init();
function QuickView({ id, closeModalView }) {
  const { cart, addCart, removeItem, increaseCount, decreaseCount } =
    useContext(CartContext);
  const [viewProduct, setViewProduct] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [zoomed, setZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
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

  useEffect(() => {
    fetch(
      "https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products/" +
        id
    )
      .then((res) => res.json())
      .then((data) => setViewProduct(data));
  }, []);
  useEffect(() => {
    if (viewProduct.images && viewProduct.images.length > 0) {
      setSelectedImage(viewProduct.images[0]);
    } else {
      setSelectedImage(viewProduct.thumbnail);
    }
  }, [viewProduct]);

  const handleImageOptionClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };
  return (
    <div className="quick-view-modal">
      <div
        className="quick-view-modal-container"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="close-qw">
          <i
            className="fa-sharp fa-regular fa-xmark"
            onClick={closeModalView}
          ></i>
        </div>
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
                    backgroundPosition: `-${position.x * 1}px -${position.y * 1}px`,}}
                ></div>
              )}
            </div>
            <div className="images-option">
              {viewProduct.images?.map((imageUrl, index) => (
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
              <p className="title-details">{viewProduct.name}</p>
              <span className="review">{viewProduct.reviews} Review(s)</span>
              <p className="price">
                $
                {isNaN(viewProduct.price) ? null : viewProduct.price.toFixed(2)}
                <span>
                  {viewProduct?.oldPrice !== undefined
                    ? `$${viewProduct?.oldPrice.toFixed(2)}`
                    : ""}
                </span>
              </p>
              <p className="description">{viewProduct.description?.text}</p>
            </div>
            <div className="details-btn-group">
              <div className="add-btn-count">
                {cart.map((x) => {
                  if (x.id === viewProduct.id) {
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
                {cart.every((x) => x.id !== viewProduct.id) && (
                  <div className="count-details">
                    <span onClick={() => addCart(viewProduct)}>+</span>
                  </div>
                )}
                <button
                  className="add-btn-details"
                  onClick={() => addCart(viewProduct)}
                >
                  <Link to={"/cart"}>ADD TO CART</Link>
                </button>
              </div>
              <p className="stock">
                <span>Availability:</span>
                <span>{viewProduct.stockStatus}</span>
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
      </div>
    </div>
  );
}

export default QuickView;
