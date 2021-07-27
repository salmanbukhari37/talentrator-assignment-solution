import React from "react";
import ProdcuctRating from "./ProdcuctRating";
import ProductDescription from "./ProductDescription";

function ProductContent({ explanation, starRating }) {
  return (
    <div className="bbb_deals_content">
      <ProductDescription explanation={explanation} />
      <ProdcuctRating starRating={starRating} />
    </div>
  );
}

export default ProductContent;
