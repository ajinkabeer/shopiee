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
      const index = findIndex(state.cart, action.payload.id);
      let newCart =
        index >= 0
          ? updateOrderQuantity(state.cart, action.payload)
          : [...state.cart, action.payload];

      return {
        ...state,
        cart: newCart,
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

const findIndex = (cart, id) => {
  return cart.findIndex((product) => product.id === id);
};

const updateOrderQuantity = (cart, product) => {
  const index = findIndex(cart, product.id);
  const newCart = [...cart];
  const existingProduct = newCart[index];
  const updateQuantity = {
    ...existingProduct,
    quantity: existingProduct.quantity + product.quantity,
  };
  newCart[index] = updateQuantity;
  return newCart;
};
