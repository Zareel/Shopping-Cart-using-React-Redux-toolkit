import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItems = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-full bg-[#111111]">
      <div className="max-w-5xl mx-auto">
        <article className="w-full grid grid-cols-3 items-center mt-6 mb-4  ">
          <img className="w-[80px]" src={img} alt={title} />
          <div className="flex flex-col gap-1">
            <h4>{title}</h4>
            <h4 className="text-green-500">$ {price}</h4>
            <button
              onClick={() => {
                dispatch(removeItem(id));
              }}
            >
              <DeleteIcon />
            </button>
          </div>
          <div className="flex justify-center gap-2">
            <AddIcon
              onClick={() => {
                dispatch(increase({ id }));
              }}
              className="text-green-500"
            />
            <p className="amount">{amount}</p>
            <RemoveIcon
              onClick={() => {
                if (amount === 1) {
                  dispatch(removeItem(id));
                  return;
                }
                dispatch(decrease({ id }));
              }}
              className="text-red-500"
            />
          </div>
        </article>
      </div>
    </div>
  );
};

export default CartItems;
