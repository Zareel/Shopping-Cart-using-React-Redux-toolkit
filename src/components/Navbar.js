import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import React from "react";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav className=" w-full h-[80px] bg-green-500">
      <div className="max-w-5xl mx-auto w-full h-full flex justify-between items-center ">
        <h3 className="text-4xl font-semibold">Redux Toolkit</h3>

        <div className="flex flex-col items-start justify-center headerHover relative">
          <ShoppingCartIcon className="font-bold" />
          <div className="absolute text-xs -top-2 left-4 font-semibold p-1 h-4 bg-[#111111] rounded-full flex justify-center items-center">
            <p className="text-xs font-semibold  text-whiteText">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
