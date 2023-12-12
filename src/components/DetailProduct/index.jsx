import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";

function DetailProduct() {
  const { cart, addCart, increaseCount, decreaseCount } =
    useContext(CartContext);
  const [detailsProduct, setdetailsProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(
      "https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products/" +
        id
    )
      .then((res) => res.json())
      .then((data) => setdetailsProduct(data));
  }, []);

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
          <span className="review">{detailsProduct.reviews}</span>
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
          {cart.map((x) => {
            if (x.id === detailsProduct.id) {
              return (
                <div className="count-details" key={x.id}>
                  <span onClick={() => decreaseCount(x)}>-</span>
                  <span className="">{x.count} </span>
                  <span onClick={() => increaseCount(x)}>+</span>
                </div>
              );
            }
            return null;
          })}
          <button>
            <Link to={"/cart"}>ADD TO CART</Link>
          </button>
          <p className="stock">
            <span>{detailsProduct.stockStatus}</span>
          </p>
          <div className="share">
            <div className="medias-details">
              <div className="details-icon"></div>
              <div className="details-icon"></div>
              <div className="details-icon"></div>
              <div className="details-icon"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
