import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import CardList from "../CardList";
import PaginationRounded from "../Pagination";
function ProductCards({ setCurrentPage, currentPage }) {
  const [openCards, setOpenCards] = useState(true);
  const [openList, setOpenList] = useState(false);
  const [products, setProducts] = useState([]);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const [allProducts, setAllProducts] = useState(0);
  useEffect(() => {
    fetch(
      "https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products"
    )
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
    fetch(
      `https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products?p=${currentPage}&l=${postsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [currentPage]);
  let totalPages = Math.ceil(allProducts.length / postsPerPage);
  return (
    <section>
      <div className="cards-heading">
        <div className="cards-h-btns">
          <button
            className={openCards ? "btn-selected" : null}
            onClick={() => {
              setOpenCards(true);
              setOpenList(false);
            }}
          >
            <i className="fa-solid fa-grid"></i>
          </button>
          <button
            className={openList ? "btn-selected" : null}
            onClick={() => {
              setOpenList(true);
              setOpenCards(false);
            }}
          >
            <i className="fa-solid fa-list"></i>
          </button>
        </div>
      </div>
      <div className="product-cards">
        {openCards &&
          products.map((x) => (
            <ProductCard
              key={x.id}
              title={x.name}
              price={x.price}
              oldPrice={x?.oldPrice}
              image={x.thumbnail}
              item={x}
              id={x.id}
            />
          ))}
      </div>
      <div className="card-lists">
        {openList &&
          products.map((x) => (
            <CardList
              key={x.id}
              title={x.name}
              price={x.price}
              oldPrice={x?.oldPrice}
              image={x.thumbnail}
              item={x}
              id={x.id}
              desc={x.description?.text}
            />
          ))}
      </div>
      <PaginationRounded
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </section>
  );
}

export default ProductCards;
