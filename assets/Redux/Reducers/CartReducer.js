import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from '../constants';

const CartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemViewed = state.find((item) => item.id == action.payload.id);
      if (!itemViewed) {
        return [...state, action.payload];
      } else {
        return state;
      }
    case REMOVE_FROM_CART:
      return state.filter((item) => item !== action.payload);
    case CLEAR_CART:
      return (state = []);
  }
  return state;
};

export default CartReducer;
