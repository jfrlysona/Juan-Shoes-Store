import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import QuickView from "../QuickView";
import { WishlistContext } from "../../context/WIshlistProvider";
import { CartContext } from "../../context/CartProvider";

function CardList({ title, price, oldPrice, image, item, id, desc }) {
  const { addCart } = useContext(CartContext);
  const { addWishlist } = useContext(WishlistContext);
  const [openQuickView, setOpenQuickView] = useState(null);
  const openQuickViewModal = () => {
    document.body.classList.add("overflow-hidden");
  };
  const closeQuickViewModal = () => {
    document.body.classList.remove("overflow-hidden");
  };
  function handleLinkClick() {
    setTimeout(() => {
      window.location.reload();
    }, 200);
  }
  return (
    <div className="card-list">
      <div className="card-list-img">
        <Link to={"/details/" + id} onClick={()=>handleLinkClick()}>
          <img src={image} alt="product image" />
        </Link>
      </div>
      <div className="card-list-content">
        <div className="card-list-text">
        <Link to={"/details/" + id} onClick={()=>handleLinkClick()}>{title}</Link>
          <p className="card-list-price">
            ${price.toFixed(2)}{" "}
            <span>
              {oldPrice !== undefined ? `$${oldPrice.toFixed(2)}` : ""}
            </span>
          </p>
          <p className="card-list-desc">{desc}</p>
        </div>
        <div className="card-list-icons">
          <div
            className="card-list-icon heart"
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
            className="card-list-icon bag"
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
          <div
            className="card-list-icon eye"
            onClick={() => {
              setOpenQuickView(id);
              openQuickViewModal();
            }}
            data-tooltip-id="quick-view"
          >
            <i className="fa-sharp fa-light fa-eye"></i>
          </div>
          {openQuickView ? (
            <QuickView
              id={id}
              closeModalView={() => {
                setOpenQuickView(null);
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
  );
}

export default CardList;
