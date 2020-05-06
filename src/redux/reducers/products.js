import * as types from "../constants";

const initialState = {
  products: "",
};

export default function authorReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_DATA:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}
