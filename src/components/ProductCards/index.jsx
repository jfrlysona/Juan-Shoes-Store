import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import CardList from "../CardList";

function ProductCards() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <div className="product-cards">
        {products.map((x) => (
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
        {products.map((x) => (
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
    </>
  );
}

export default ProductCards;
