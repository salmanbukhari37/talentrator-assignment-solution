import React from "react";

function ProductDescription({ explanation }) {
  return (
    <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
      <div className="bbb_deals_item_name">{explanation}</div>
    </div>
  );
}

export default ProductDescription;
