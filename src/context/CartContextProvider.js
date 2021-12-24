import React, { useReducer } from "react";


const initialState = {
  cartItem: [],
  totalItem: 0,
  totalPrice: 0,
  checkOut: false,
};
const totalItems = (item) => {
  return item.reduce((total, product) => total + product.quantity, 0);
};
const totalPrices = (item) => {
  return item.reduce((total, product) => total + product.quantity * product.price, 0).toFixed(2);
};
const cartReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_TO_CART":
      if (!state.cartItem.find((item) => item.id === action.payload.id)) {
        state.cartItem.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        cartItem: [...state.cartItem],
        totalItem: totalItems(state.cartItem),
        totalPrice: totalPrices(state.cartItem),
        checkOut: false,
      };
    case "REMOVE_ITEM":
      const filtered = state.cartItem.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cartItem: [...filtered],
        totalItem: totalItems(filtered),
        totalPrice: totalPrices(filtered),
      };
    case "INCREASE":
      const indexIncrease = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItem[indexIncrease].quantity++;
      return {
        ...state,
        totalItem: totalItems(state.cartItem),
        totalPrice: totalPrices(state.cartItem),
      };
    case "DECREASE":
      const indexDecrease = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItem[indexDecrease].quantity--;
      return {
        ...state,
        totalItem: totalItems(state.cartItem),
        totalPrice: totalPrices(state.cartItem),
      };
    case "CHEKOUT":
      return {
        cartItem: [],
        totalItem: 0,
        totalPrice: 0,
        checkOut: true,
      };
    case "CLEAR":
      return {
        cartItem: [],
        totalItem: 0,
        totalPrice: 0,
        checkOut: false,
      };
    default:
      return state;
  }
};
export const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
