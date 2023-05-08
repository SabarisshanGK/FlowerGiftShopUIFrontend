import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../constants';

export const addToWishList = (payload) => {
  return {
    type: ADD_TO_WISHLIST,
    payload,
  };
};

export const removeFromWishList = (payload) => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload,
  };
};
