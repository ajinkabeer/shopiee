import * as types from "../constants";

const initialState = {
  products: "",
  cart: [],
};

export default function authorReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_DATA:
      return {
        ...state,
        products: action.payload,
      };
    case types.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case types.REMOVE_FROM_CART:
      const filteredCart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        cart: filteredCart,
      };
    default:
      return state;
  }
}
