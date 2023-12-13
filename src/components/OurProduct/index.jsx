import React from 'react'
import ProductsSlider from '../ProductsSlider';

function OurProduct() {
  
  return (
    <section id="ourProduct">
      <div className="ourProduct-container">
        <div className="ourProduct-title">
          <h1>Our Product</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        </div>
       <ProductsSlider/>
      </div>
    </section>
  );
}

export default OurProduct;
