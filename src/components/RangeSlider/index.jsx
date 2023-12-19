import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(priceRange) {
  return `$${priceRange}`;
}

export default function RangeSlider({ priceRange, setPriceRange }) {
  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Price range"}
        value={priceRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
