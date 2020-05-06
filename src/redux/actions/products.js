import * as types from "../constants";

export function addData(data) {
  return { type: types.ADD_DATA, payload: data };
}

export function addToCart(data) {
  return { type: types.ADD_TO_CART, payload: data };
}
