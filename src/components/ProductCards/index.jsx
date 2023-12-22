import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import CardList from "../CardList";
import PaginationRounded from "../Pagination";
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import FilterShop from "../FilterShop";
function ProductCards({ setCurrentPage, currentPage }) {
  const [openCards, setOpenCards] = useState(true);
  const [openList, setOpenList] = useState(false);
  const [products, setProducts] = useState([]);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const [allProducts, setAllProducts] = useState([]);
  const [sort, setSort] = useState("relevance");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products"
    )
      .then((res) => res.json())
      .then((data) => {
        const sortedData = sortByOption(sort, data);
        setAllProducts(sortedData);

        const paginatedData = sortedData.slice(
          (currentPage - 1) * postsPerPage,
          currentPage * postsPerPage
        );
        setProducts(paginatedData);
        setFilteredProducts(sortedData);
      });
  }, [currentPage, sort, postsPerPage]);

  useEffect(() => {
    const paginatedData = filteredProducts.slice(
      (currentPage - 1) * postsPerPage,
      currentPage * postsPerPage
    );
    setProducts(paginatedData);
  }, [filteredProducts, currentPage, postsPerPage]);

  let totalPages = Math.ceil(filteredProducts.length / postsPerPage);

  const sortByOption = (option, data) => {
    switch (option) {
      case "relevance":
        return data.slice().sort((a, b) => b.reviews - a.reviews);
      case "nameAToZ":
        return data.slice().sort((a, b) => a.name.localeCompare(b.name));
      case "nameZToA":
        return data.slice().sort((a, b) => b.name.localeCompare(a.name));
      case "priceLow":
        return data.slice().sort((a, b) => a.price - b.price);
      case "priceHigh":
        return data.slice().sort((a, b) => b.price - a.price);
      case "modelAToZ":
        return data.slice().sort((a, b) => a.model.localeCompare(b.model));
      case "modelZToA":
        return data.slice().sort((a, b) => b.model.localeCompare(a.model));
      default:
        return data;
    }
  };

  const handleChangeOption = (event) => {
    const selectedOption = event.target.value;
    setSort(selectedOption);
  };

  return (
    <section
      style={{
        display: "grid",
        placeContent: "center",
        gridTemplateColumns: "1fr 1fr",
        margin: "80px auto",
        maxWidth: "1320px",
      }}
    >
      <FilterShop
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        setFilteredProducts={setFilteredProducts}
        filteredProducts={filteredProducts}
      />
      <div id="all-cards" style={{width:"966px"}}>
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
          <div className="cards-sort">
            <div className="sort">
              <Box sx={{ minWidth: 200 }} className="sortBox">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Sort by :
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sort}
                    label="Sort by :"
                    onChange={handleChangeOption}
                  >
                    <MenuItem value="relevance"> Relevance </MenuItem>
                    <MenuItem value="nameAToZ"> Name (A - Z) </MenuItem>
                    <MenuItem value="nameZToA"> Name (Z - A) </MenuItem>
                    <MenuItem value="priceLow">
                      {"Price (Low > High)"}{" "}
                    </MenuItem>
                    <MenuItem value="priceHigh">
                      {"Price (High > Low)"}{" "}
                    </MenuItem>
                    <MenuItem value="modelAToZ"> Model (A - Z) </MenuItem>
                    <MenuItem value="modelZToA"> Model (Z - A) </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="show-res">
              Showing {(currentPage - 1) * postsPerPage + 1}–
              {currentPage * postsPerPage < filteredProducts.length
                ? currentPage * postsPerPage
                : filteredProducts.length}{" "}
              Of {filteredProducts.length} Results
            </div>
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
                inSlider={false}
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
      </div>
    </section>
  );
}

export default ProductCards;
