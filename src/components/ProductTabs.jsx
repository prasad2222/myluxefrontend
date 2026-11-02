import { useState } from "react";
import MuiTabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export const ProductTabs = ({ onCategoryChange }) => {
  const [value, setValue] = useState("mens-shoes");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onCategoryChange(newValue);
  };

  return (
    <MuiTabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
    >
      <Tab label="Smartphones" value={"smartphones"}/>
      <Tab label="Sun glasses" value={"sunglasses"}/>
      <Tab label="Mens Shirts" value={"mens-shirts"}/>
      <Tab label="Mens Shoes" value={"mens-shoes"}/>
      <Tab label="Mens Watches" value={"mens-watches"}/>
      <Tab label="Womens Bags" value={"womens-bags"}/>
      <Tab label="Womens Jewellery" value={"womens-jewellery"}/>
      <Tab label="Womens Watches" value={"womens-watches"}/>
      <Tab label="Womens Shoes" value={"womens-shoes"}/>
      <Tab label="Womens Dresses" value={"womens-dresses"}/>
    </MuiTabs>
  );
};