import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

function ProductCards() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-cards">
      {products.map((x) => (
        <ProductCard title={x.title} price={x.price} image={x.image} item={x}/>
      ))}
    </div>
  );
}

export default ProductCards;
