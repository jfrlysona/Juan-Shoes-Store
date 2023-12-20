import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";

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
        min={0}
        max={200}
      />
      <Typography id="linear-slider" gutterBottom>
        Price: ${priceRange[0]} - ${priceRange[1]}
      </Typography>
    </Box>
  );
}
