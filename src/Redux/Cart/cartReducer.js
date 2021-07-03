import {
  ADD_TO_CART,
  DECREASE_COUNT,
  DELETE_CART_ITEM,
  INCREASE_COUNT,
} from "./cartTypesConstants";

export const cartReducer = (
  initialState = {
    cart: [],
  },
  action
) => {

  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...initialState,
        cart: [...initialState.cart, action.payload],
      };

  default:
    return initialState;
}
}
   