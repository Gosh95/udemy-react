import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  let updatedTotalPrice = 0;
  let updatedCartItems = [];

  if (action.type === "ADD") {
    const existingCartItemIdx = state.items.findIndex((item) => item.id === action.item.id);
    if (existingCartItemIdx !== -1) {
      const existingCartItem = state.items[existingCartItemIdx];
      const updatedCartItem = {
        ...existingCartItem,
        amount: action.item.amount + existingCartItem.amount,
      };
      updatedCartItems = [...state.items];
      updatedCartItems[existingCartItemIdx] = updatedCartItem;
      updatedTotalPrice = state.totalPrice + action.item.amount * existingCartItem.price;
    } else {
      updatedCartItems = state.items.concat(action.item);
      updatedTotalPrice = state.totalPrice + action.item.price * action.item.amount;
    }
    return { items: updatedCartItems, totalPrice: updatedTotalPrice };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIdx = state.items.findIndex((item) => item.id === action.id);
    const existingCartItem = state.items[existingCartItemIdx];
    updatedTotalPrice = Math.abs(state.totalPrice - existingCartItem.price);
    if (existingCartItem.amount === 1) {
      updatedCartItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedCartItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedCartItems = [...state.items];
      updatedCartItems[existingCartItemIdx] = updatedCartItem;
    }
    return { items: updatedCartItems, totalPrice: updatedTotalPrice };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemToCarthandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCarthandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
