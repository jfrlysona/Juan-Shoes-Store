import React from "react";
import ProductsSlider from "../ProductsSlider";

function RelatedProducts({detailsProduct}) {
  return (
    <section id="relatedProducts">
      <div className="relatedProducts-container">
        <div className="relatedProducts-title">
          <h1>Related Product</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        </div>
        <ProductsSlider detailsProduct={detailsProduct}/>
      </div>
    </section>
  );
}

export default RelatedProducts;
