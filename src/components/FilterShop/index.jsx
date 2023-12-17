import React from "react";
import RangeSlider from "../RangeSlider";

function FilterShop() {
  return <div className="filter">
    <div className="filter-container">
      <div className="filter-categories">
        <h3>Categories</h3>
        <ul>
          <li>Mens</li>
          <li>Womens</li>
          <li>Kids</li>
        </ul>
      </div>
      <div className="filter-by-price">
        <h3>Filter By Price</h3>
        <RangeSlider />
        <button>FILTER</button>
      </div>
      <div className="filter-model">
        <h3>Model</h3>
        <ul>
          <li>Boots</li>
          <li>Flats</li>
          <li>Heels</li>
          <li>Loafers</li>
          <li>Sneakers</li>
          <li>Sandals</li>
        </ul>
      </div>
      <img src="https://htmldemo.net/juan/juan/assets/img/banner/banner_left.jpg" alt="filter image" />
    </div>
  </div>;
}

export default FilterShop;
