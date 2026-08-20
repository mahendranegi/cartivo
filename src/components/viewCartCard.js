import React from "react";

function ViewCartCard({title,description,price,image,handleRemove,handleAdd,handleremoveItems,id,value}) {
  return (
    <div className="viewCartCard">

      <div className="cartCardImage">
        <img
          src={image}
          alt="Product"
        />
      </div>

      <div className="cartCardContent">

        <div className="cartCardInfo">
          <h2>{title}</h2>

          <p className="cartCardDescription">
            {description}
          </p>

          <p className="cartCardPrice">
            ₹{price}
          </p>
        </div>

        <div className="cartCardBottom">

          <div className="quantityBox">
            <button onClick={()=> handleRemove(id)}>-</button>
            <span>{value}</span>
            <button onClick={()=>handleAdd(id)}>+</button>
          </div>

          <button className="removeBtn" onClick={(id)=>handleremoveItems(id)}>
            Remove
          </button>

        </div>

      </div>

    </div>
  );
}

export default ViewCartCard;