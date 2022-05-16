import { CartActionTypes } from "./cartTypes";

const CART_INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
};
export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CartActionTypes.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };

    case CartActionTypes.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  }
};
