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
          ? updateOrderQuantity(state.cart, action.payload, action.type)
          : [...state.cart, action.payload];
      return {
        ...state,
        cart: newCart,
      };

    case types.REDUCE_ORDER_QUANTITY:
      const index2 = findIndex(state.cart, action.payload.id);
      let newCart2 =
        index2 >= 0
          ? updateOrderQuantity(state.cart, action.payload, action.type)
          : [...state.cart, action.payload];
      return {
        ...state,
        cart: newCart2,
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

const findIndex = (cart, id) => {
  return cart.findIndex((product) => product.id === id);
};

const updateOrderQuantity = (cart, product, type) => {
  const index = findIndex(cart, product.id);
  const newCart = [...cart];
  const existingProduct = newCart[index];
  let updateQuantity = {};
  if (type === types.ADD_TO_CART) {
    updateQuantity = {
      ...existingProduct,
      quantity: existingProduct.quantity + product.quantity,
    };
  } else {
    updateQuantity = {
      ...existingProduct,
      quantity: existingProduct.quantity - 1,
    };
  }

  newCart[index] = updateQuantity;
  return newCart;
};
