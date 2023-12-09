import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../context/WIshlistProvider";
import { CartContext } from "../../context/CartProvider";

function WishlistTable() {
  const { wishlist, removeItemWishlist } = useContext(WishlistContext);
  const {addCart}=useContext(CartContext)
  return (
    <section id="wishlist">
      <table className="wishlist-table-container">
        <thead>
          <tr>
            <th>THUMBNAIL</th>
            <th style={{ width: "594px" }}>PRODUCT</th>
            <th>PRICE</th>
            <th>STOCK STATUS</th>
            <th>ADD TO CART</th>
            <th>REMOVE</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.length ? (
            wishlist.map((x) => (
              <tr key={x.id}>
                <td>
                  <img src={x.thumbnail} alt="card item" />
                </td>
                <td className="product-name">
                  <a href="#">{x.name}</a>
                </td>
                <td>${(x.price).toFixed(2)}</td>
                <td>{x.stockStatus}</td>
                <td>
                  <Link to="/cart" className="wishlist-add-cart" onClick={()=>addCart(x)}>
                    Add to Cart
                  </Link>
                </td>
                <td>
                  <i
                    className="fa-light fa-trash-can"
                    onClick={() => removeItemWishlist(x)}
                  ></i>
                </td>
              </tr>
            ))
          ) : (
            <p className="empty-wishlist">Wishlist is empty</p>
          )}
        </tbody>
      </table>
    </section>
  );
}

export default WishlistTable;
