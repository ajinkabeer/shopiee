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

export function reduceOrderQuantity(data) {
  return { type: types.REDUCE_ORDER_QUANTITY, payload: data };
}

export function emptyCart(data) {
  return { type: types.EMPTY_CART, payload: data };
}
