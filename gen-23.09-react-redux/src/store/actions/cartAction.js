import { ADDTO_CART, REMOVE_FROM_CART } from "../types";

export const addToCart = (payload) => ({
  type: ADDTO_CART,
  payload,
});

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});
