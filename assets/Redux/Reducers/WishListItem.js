import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../constants';

const WishListItem = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      const itemViewed = state.find((item) => item.id == action.payload.id);
      if (!itemViewed) {
        return [...state, action.payload];
      } else {
        return state;
      }
    case REMOVE_FROM_WISHLIST:
      return state.filter((item) => item !== action.payload);
  }
  return state;
};

export default WishListItem;
