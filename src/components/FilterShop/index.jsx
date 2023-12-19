import React, { useEffect, useState } from "react";
import RangeSlider from "../RangeSlider";

function FilterShop({
  allProducts,
  setAllProducts,
  setFilteredProducts,
  filteredProducts,
}) {
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedModel, setSelectedModel] = useState("All");
  useEffect(() => {
    let updatedProducts = [...allProducts];

    if (selectedCategory !== "All") {
      updatedProducts = updatedProducts.filter(
        (x) => x.category === selectedCategory
      );
    }

    if (selectedModel !== "All") {
      updatedProducts = updatedProducts.filter(
        (x) => x.model === selectedModel
      );
    }

    setFilteredProducts(updatedProducts);
  }, [selectedCategory, selectedModel, allProducts, setFilteredProducts]);

  function handleClick(category) {
    setSelectedCategory(category);
  }

  function handleModelClick(model) {
    setSelectedModel(model);
  }

  function handleFilterByPrice() {
    const filteredProducts = allProducts.filter(
      (x) =>
        parseFloat(x.price) >= priceRange[0] &&
        parseFloat(x.price) <= priceRange[1]
    );
    setFilteredProducts(filteredProducts);
  }

  return (
    <div className="filter">
      <div className="filter-container">
        <div className="filter-categories">
          <h3>Categories</h3>
          <ul>
            <li
              style={selectedCategory === "All" ? { color: "#E3A51E" } : null}
              onClick={() => handleClick("All")}
            >
              All <span>({allProducts.length})</span>
            </li>
            <li
              style={selectedCategory === "Mens" ? { color: "#E3A51E" } : null}
              onClick={() => handleClick("Mens")}
            >
              Mens
              <span>
                ({allProducts.filter((x) => x.category === "Mens").length})
              </span>
            </li>
            <li
              style={
                selectedCategory === "Womens" ? { color: "#E3A51E" } : null
              }
              onClick={() => handleClick("Womens")}
            >
              Womens
              <span>
                ({allProducts.filter((x) => x.category === "Womens").length})
              </span>
            </li>
            <li
              style={selectedCategory === "Kids" ? { color: "#E3A51E" } : null}
              onClick={() => handleClick("Kids")}
            >
              Kids
              <span>
                ({allProducts.filter((x) => x.category === "Kids").length})
              </span>
            </li>
          </ul>
        </div>
        <div className="filter-by-price">
          <h3>Filter By Price</h3>
          <RangeSlider
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            value={priceRange}
            onChange={(newValue) => setPriceRange(newValue)}
          />
          <button onClick={handleFilterByPrice}>FILTER</button>
        </div>
        <div className="filter-model">
          <h3>Model</h3>
          <ul>
            <li
              style={selectedModel === "All" ? { color: "#E3A51E" } : null}
              onClick={() => handleModelClick("All")}
            >
              All <span>({allProducts.length})</span>
            </li>
            <li
              style={selectedModel === "Boots" ? { color: "#E3A51E" } : null}
              onClick={() => handleModelClick("Boots")}
            >
              Boots
              <span>
                ({allProducts.filter((x) => x.model === "Boots").length})
              </span>
            </li>
            <li
              style={selectedModel === "Flats" ? { color: "#E3A51E" } : null}
              onClick={() => handleModelClick("Flats")}
            >
              Flats
              <span>
                ({allProducts.filter((x) => x.model === "Flats").length})
              </span>
            </li>
            <li
              style={selectedModel === "Heels" ? { color: "#E3A51E" } : null}
              onClick={() => handleModelClick("Heels")}
            >
              Heels
              <span>
                ({allProducts.filter((x) => x.model === "Heels").length})
              </span>
            </li>
            <li
              style={selectedModel === "Loafers" ? { color: "#E3A51E" } : null}
              onClick={() => handleModelClick("Loafers")}
            >
              Loafers
              <span>
                ({allProducts.filter((x) => x.model === "Loafers").length})
              </span>
            </li>
            <li
              style={selectedModel === "Sneakers" ? { color: "#E3A51E" } : null}
              onClick={() => handleModelClick("Sneakers")}
            >
              Sneakers
              <span>
                ({allProducts.filter((x) => x.model === "Sneakers").length})
              </span>
            </li>
            <li
              style={selectedModel === "Sandals" ? { color: "#E3A51E" } : null}
              onClick={() => handleModelClick("Sandals")}
            >
              Sandals
              <span>
                ({allProducts.filter((x) => x.model === "Sandals").length})
              </span>
            </li>
          </ul>
        </div>
        <img
          src="https://htmldemo.net/juan/juan/assets/img/banner/banner_left.jpg"
          alt="filter image"
        />
      </div>
    </div>
  );
}

export default FilterShop;
