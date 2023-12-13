import React, { useContext } from 'react'
import { CartContext } from "../../context/CartProvider";
import { Link } from 'react-router-dom';

function Details({detailsProduct}) {
    const { cart, addCart, removeItem, increaseCount, decreaseCount } =
    useContext(CartContext);
  return (
    <div className="product-details-container">
    <div className="product-details-images">
      <div className="thumbnail-details">
        <img src={detailsProduct.thumbnail} alt="thumbnail" />
      </div>
      <div className="images-option">
        {detailsProduct.images?.map((imageUrl, index) => (
          <div key={index} className="option-img">
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
            <div className="count-details">
              <span onClick={() => addCart(detailsProduct)}>+</span>
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
          <span>{detailsProduct.stockStatus}</span>
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
  )
}

export default Details