import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CartItems = ({ id, img, title, price, amount }) => {
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">$ {price}</h4>
        <button className="remove-btn">Remove</button>
      </div>
      <div className="amount-btn">
        <KeyboardArrowUpIcon />
        <p className="amount">{amount}</p>
        <KeyboardArrowDownIcon />
      </div>
    </article>
  );
};

export default CartItems;
