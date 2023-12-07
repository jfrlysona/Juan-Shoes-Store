import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

function ProductCard({ title, price, image, item }) {
  const { addCart } = useContext(CartContext);
  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={image} alt="product image" />
      </div>
      <div className="product-card-text">
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
      <div className="product-card-icons">
        {/* <i className="fa-sharp fa-light fa-heart"></i> */}
        <div className="product-card-icon" onClick={() => addCart(item)}>
          <i className="fa-sharp fa-light fa-bag-shopping"></i>
        </div>
        {/* <i className="fa-sharp fa-light fa-eye"></i> */}
      </div>
    </div>
  );
}

export default ProductCard;
