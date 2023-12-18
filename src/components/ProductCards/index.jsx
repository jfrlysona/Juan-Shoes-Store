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
function ProductCards({ setCurrentPage, currentPage }) {
  const [openCards, setOpenCards] = useState(true);
  const [openList, setOpenList] = useState(false);
  const [products, setProducts] = useState([]);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const [allProducts, setAllProducts] = useState(0);
  const [sort, setSort] = useState("");
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
  const handleChange = (event) => {
    setSort(event.target.value);
  };
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
        <div className="sort">
          <Box sx={{ minWidth: 140 }} className="sortBox">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort by :</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Sort by :"
                onChange={handleChange}
              >
                <MenuItem > Relevance </MenuItem>
                <MenuItem > Name (A - Z) </MenuItem>
                <MenuItem > Name (Z - A) </MenuItem>
                <MenuItem >{"Price (Low > High)"} </MenuItem>
                <MenuItem >{"Price (High > Low)"} </MenuItem>
                {/* <p>relevance nameAToZ nameZToA priceLow priceHigh</p> */}
              </Select>
            </FormControl>
          </Box>
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
