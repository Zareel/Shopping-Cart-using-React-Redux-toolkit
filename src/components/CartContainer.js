import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <header className="w-full h-full bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <h2 className="py-6 mt-6 text-5xl font-semibold tracking-wider">
            Your Shopping Cart
          </h2>
          <h4 className="text-center lowercase text-blue-500 mt-6  h-screen tracking-widest text-xl">
            is currently empty
          </h4>
        </div>
      </header>
    );
  }
  return (
    <section className="cart w-full h-full ">
      <header>
        <h2 className=" text-3xl py-8 font-semibold tracking-wider">
          Shopping Cart
        </h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer className="max-w-5xl mx-auto">
        <hr className="bg-gray-500 border-transparent border-w-[1px]" />
        <div className="flex justify-end ">
          <h4 className="mr-16 py-4 text-lg">
            Total:<span className="px-6">${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          onClick={() => dispatch(clearCart())}
          className="uppercase bg-green-500 rounded-sm py-1 px-3 tracking-wider inline-block font-semibold ease-in-out duration-300 text-md text-black  border-none outline-none btnShadow "
        >
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
