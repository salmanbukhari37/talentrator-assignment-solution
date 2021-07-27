import React from "react";

function ProductImage({ pictureLink, name }) {
  return (
    <div className="bbb_deals_image">
      <img src={pictureLink} alt={name} className="img-fluid" />
    </div>
  );
}

export default ProductImage;
