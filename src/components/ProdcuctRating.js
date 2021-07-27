import React from "react";
import Rating from "react-rating";

function ProdcuctRating({ starRating }) {
  return (
    <div className="available">
      <div className="available_line d-flex flex-row justify-content-start">
        <div className="sold_stars ml-auto">
          <Rating initialRating={starRating} readonly />
        </div>
      </div>
      <div className="available_bar">
        <span style={{ width: "17%" }} />
      </div>
    </div>
  );
}

export default ProdcuctRating;
