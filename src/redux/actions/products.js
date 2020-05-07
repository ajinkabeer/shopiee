import * as types from "../constants";

export function addData(data) {
  return { type: types.ADD_DATA, payload: data };
}

export function addToCart(data) {
  return { type: types.ADD_TO_CART, payload: data };
}

export function removeFromCart(data) {
  return { type: types.REMOVE_FROM_CART, payload: data };
}

export function emptyCart(data) {
  console.log("EMPTY CART");
  return { type: types.EMPTY_CART, payload: data };
}
