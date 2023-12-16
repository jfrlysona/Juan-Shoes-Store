import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function DetailInformation({ detailsProduct }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="tab-container">
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        className="tab-head"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="tabs"
        >
          <Tab label="DESCRIPTION" {...a11yProps(0)} />
          <Tab label="INFORMATION" {...a11yProps(1)} />
          <Tab label="REVIEWS" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} className="tab-body">
        <p>{detailsProduct.description?.text}</p>
        <div className="info">
          <img src={detailsProduct.thumbnail} alt="product image" />
          <ul>
            {detailsProduct.description?.list.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <table>
          <tbody>
            <tr>
              <td>Color</td>
              <td>{detailsProduct.information?.color}</td>
            </tr>
            <tr>
              <td>Size</td>
              <td>{detailsProduct.information?.size}</td>
            </tr>
          </tbody>
        </table>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
