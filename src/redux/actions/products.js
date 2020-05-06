import * as types from "../constants";

export function addData(data) {
  return { type: types.ADD_DATA, payload: data };
}
