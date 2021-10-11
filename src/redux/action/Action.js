import { ADD_TO_CART, SHOW_CART } from "./ActionTypes";

export const showCart = (direction) =>({
    type: SHOW_CART,
    payload: direction,
});

export const addToCart = (product) =>({
    type: ADD_TO_CART,
    payload: product,
});

// Action creator