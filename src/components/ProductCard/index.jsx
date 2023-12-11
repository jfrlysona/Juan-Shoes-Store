import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { Tooltip } from "react-tooltip";
import { WishlistContext } from "../../context/WIshlistProvider";

function ProductCard({ title, price,oldPrice, image, item }) {
  const { addCart } = useContext(CartContext);
  const { addWishlist } = useContext(WishlistContext);
  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={image} alt="product image" />
      </div>
      <div className="product-card-text">
        <h3>{title}</h3>
        <p>${(price).toFixed(2)} <span>{(oldPrice !== undefined) ? `$${oldPrice.toFixed(2)}` : ''}</span></p>
      </div>
      <div className="product-card-icons">
        <div
          className="product-card-icon heart"
          onClick={() => addWishlist(item)}
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
          className="product-card-icon bag"
          onClick={() => addCart(item)}
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
        <div className="product-card-icon eye" data-tooltip-id="quick-view">
          <i className="fa-sharp fa-light fa-eye"></i>
        </div>
        <Tooltip
          id="quick-view"
          content="Quick View"
          events={["hover"]}
          style={{ padding: "5px", fontSize: "13px" }}
        />
      </div>
    </div>
  );
}

export default ProductCard;