import React from "react";

function PurchaseButton({ price }) {
  return (
    <div className="d-flex justify-content-end">
      <button className="btn btn-primary btn-sm text-white">
        Buy ${price.toFixed(2)}
      </button>
    </div>
  );
}

export default PurchaseButton;
