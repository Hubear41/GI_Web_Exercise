import React from "react";
import ProductItem from "./product_item";
import IndustryItem from "./industry_item";

const DropdownMenu = ({ type, subnavList, updateDropdown }) => {
  let contentItems = null;

  if (type === "PRODUCTS") {
    contentItems = subnavList.map(product => {
      return <ProductItem key={product.label} product={product} />;
    });
  } else if (type === "INDUSTRIES") {
    contentItems = subnavList.map(industry => {
      return <IndustryItem key={industry.label} industry={industry} />;
    });
  }

  return (
    <div
      id="dropdown-menu"
      onMouseLeave={e => updateDropdown({ hidden: true, type: null })}
    >
      <div id="dropdown-menu-wrapper">{contentItems}</div>
    </div>
  );
};

export default DropdownMenu;
