import * as types from "../constants";

const initialState = {
  products: "",
  cart: [],
  amount: "",
  filteredProducts: "",
};

export default function authorReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_DATA: {
      return {
        ...state,
        products: action.payload,
      };
    }

    case types.ADD_TO_CART: {
      const index = findIndex(state.cart, action.payload.id);
      let newCart =
        index >= 0
          ? updateOrderQuantity(state.cart, action.payload, action.type)
          : [...state.cart, action.payload];
      const totalAmount = findTotalAmount(newCart);
      return {
        ...state,
        cart: newCart,
        amount: totalAmount,
      };
    }

    case types.REDUCE_ORDER_QUANTITY: {
      const index = findIndex(state.cart, action.payload.id);
      let newCart =
        index >= 0
          ? updateOrderQuantity(state.cart, action.payload, action.type)
          : [...state.cart, action.payload];
      const totalAmount = findTotalAmount(newCart);
      return {
        ...state,
        cart: newCart,
        amount: totalAmount,
      };
    }

    case types.REMOVE_FROM_CART: {
      const filteredCart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        cart: filteredCart,
      };
    }

    case types.FILTER_ORDERS: {
      let items;
      if (action.payload === "price") {
        items = state.products.concat().sort((a, b) => a.price - b.price);
      } else {
        items = state.products;
      }
      return {
        ...state,
        filteredProducts: items,
      };
    }

    case types.EMPTY_CART: {
      return {
        ...state,
        cart: [],
      };
    }

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

const findTotalAmount = (cart) => {
  let total = cart
    .map((product) => product.price * product.quantity)
    .reduce((prev, next) => prev + next);
  return total;
};
