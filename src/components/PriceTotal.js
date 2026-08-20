import React from "react";


function PriceTotal({totalItems,subTotal,discount,final}) {
  return (
    <>
    
    <div className="priceTotal">

      <h2>Price Details</h2>

      <div className="priceDetails">

        <div className="priceRow">
          <span>Price ({totalItems} items)</span>
          <span>₹ {subTotal}</span>
        </div>

        <div className="priceRow">
          <span>Discount</span>
          <span className="discount">- ₹{discount}</span>
        </div>

        <div className="priceRow">
          <span>Delivery Charges</span>
          <span className="free">FREE</span>
        </div>

      </div>

      <div className="totalRow">
        <span>Total Amount</span>
        <span>₹{final}</span>
      </div>

      <p className="savingText">
        You will save ₹{discount} on this order
      </p>

      <button className="checkoutBtn">
        Proceed to Checkout
      </button>

    </div>
    </>
  );
}

export default PriceTotal;