import React from "react";
import ProductsSlider from "../ProductsSlider";

function RelatedProducts() {
  return (
    <section id="relatedProducts">
      <div className="relatedProducts-container">
        <div className="relatedProducts-title">
          <h1>Related Product</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        </div>
        <ProductsSlider />
      </div>
    </section>
  );
}

export default RelatedProducts;
