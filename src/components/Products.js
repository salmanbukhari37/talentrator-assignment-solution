import React from "react";
import ProductContent from "./ProductContent";
import ProductImage from "./ProductImage";
import ProductTitle from "./ProductTitle";
import PurchaseButton from "./PurchaseButton";

function Products({ price, pictureLink, explanation, starRating, name }) {
  return (
    <div className="col-md-4 mt-3">
      <div className="bbb_deals">
        <ProductTitle name={name} />
        <div className="bbb_deals_slider_container">
          <div className=" bbb_deals_item">
            <ProductImage pictureLink={pictureLink} name={name} />
            <ProductContent explanation={explanation} starRating={starRating} />
          </div>
          <PurchaseButton price={price} />
        </div>
      </div>
    </div>
  );
}

export default Products;
