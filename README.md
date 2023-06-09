# Shopping Cart using React-Redux-toolkit

## learning in progress
## technologies used
- React JS
- Redux toolkit
- TaiwindCSS

![Screenshot (410)](https://user-images.githubusercontent.com/110910838/226206267-2b240465-d5b3-42b1-8712-ff699f9d967f.png)

## Redux Toolkit

## Docs

[Redux Toolkit Docs](https://redux-toolkit.js.org/)

## Install redus-toolkit

```sh
npm install @reduxjs/toolkit react-redux
```

### @reduxjs/toolkit

consists of few libraries

- redux (core library, state management)
- immer (allows to mutate state)
- redux-thunk (handles async actions)
- reselect (simplifies reducer functions)

Extras

- redux devtools
- combine reducers
- react-redux
- connects our app to

### Setup Store

- create store.js

### Setup Store

- create store.js

```js
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});
```

### Setup Provider

- index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import store and provider
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

### Setup Cart Slice

- application feature
- create features folder/cart
- create cartSlice.js

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});

console.log(cartSlice);

export default cartSlice.reducer;
store.js;
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
```

### Redux DevTools

- extension
- Access store value
- create components/Navbar.js

```js
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
```

### Setup Cart

- cartSlice.js

```js
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};
```

### create CartContainer.js and CartItem.js

- CartContainer.js

```js
import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        {/_ cart header _/}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/_ cart header _/}
      <header>
        <h2>your bag</h2>
      </header>
      {/_ cart items _/}
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      {/_ cart footer _/}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn">clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
```

- CartItem.js

```js
import React from 'react';
import { ChevronDown, ChevronUp } from '../icons';

const CartItem = ({ id, img, title, price, amount }) => {
return (
<article className='cart-item'>
<img src={img} alt={title} />
<div>
<h4>{title}</h4>
<h4 className='item-price'>${price}</h4>
{/_ remove button _/}
<button className='remove-btn'>remove</button>
</div>
<div>
{/_ increase amount _/}
<button className='amount-btn'>
<ChevronUp />
</button>
{/_ amount _/}
<p className='amount'>{amount}</p>
{/_ decrease amount _/}
<button className='amount-btn'>
<ChevronDown />
</button>
</div>
</article>
);
};

export default CartItem;
First Reducer
cartSlice.js
Immer library
const cartSlice = createSlice({
name: 'cart',
initialState,
reducers: {
clearCart: (state) => {
state.cartItems = [];
},
},
});

export const { clearCart } = cartSlice.actions;
create action
const ACTION_TYPE = 'ACTION_TYPE';

const actionCreator = (payload) => {
return { type: ACTION_TYPE, payload: payload };
};

```

### CartContainer.js

```js
import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";

const CartContainer = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="btn clear-btn"
      onClick={() => {
        dispatch(clearCart());
      }}
    >
      clear cart
    </button>
  );
};

export default CartContainer;
```

### Remove, Increase, Decrease

- cartSlice.js

```js
import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
cartItems: [],
amount: 0,
total: 0,
isLoading: true,
};

const cartSlice = createSlice({
name: 'cart',
initialState,
reducers: {
clearCart: (state) => {
state.cartItems = [];
},
removeItem: (state, action) => {
const itemId = action.payload;
state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
},
increase: (state, { payload }) => {
const cartItem = state.cartItems.find((item) => item.id === payload.id);
cartItem.amount = cartItem.amount + 1;
},
decrease: (state, { payload }) => {
const cartItem = state.cartItems.find((item) => item.id === payload.id);
cartItem.amount = cartItem.amount - 1;
},
calculateTotals: (state) => {
let amount = 0;
let total = 0;
state.cartItems.forEach((item) => {
amount += item.amount;
total += item.amount \* item.price;
});
state.amount = amount;
state.total = total;
},
},
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
cartSlice.actions;

export default cartSlice.reducer;
```

- CartItem.js

```js
import React from "react";
import { ChevronDown, ChevronUp } from "../icons";

import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/_ remove button _/}
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
      <div>
        {/_ increase amount _/}
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <ChevronUp />
        </button>
        {/_ amount _/}
        <p className="amount">{amount}</p>
        {/_ decrease amount _/}
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
```

- App.js

```js
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
```
