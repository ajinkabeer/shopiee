import * as types from "../constants";

const initialState = {
  products: "",
  cart: [],
  quantity: [],
};

export default function authorReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_DATA:
      return {
        ...state,
        products: action.payload,
      };
    case types.ADD_TO_CART:
      const index = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index === -1) {
        state.cart.push(action.payload);
      } else {
        state.cart[index] = action.payload;
      }

    case types.ADD_ORDER_QUANTITY:
      return {
        ...state,
        quantity: action.payload,
      };

    case types.REMOVE_FROM_CART:
      const filteredCart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        cart: filteredCart,
      };

    case types.EMPTY_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
}
