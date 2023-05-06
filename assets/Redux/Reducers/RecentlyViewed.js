import { RECENTLY_VIEWED } from '../constants';

const RecentlyViewed = (state = [], action) => {
  switch (action.type) {
    case RECENTLY_VIEWED:
      const itemViewed = state.find((item) => item.id == action.payload.id);
      if (!itemViewed) {
        return [...state, action.payload];
      } else {
        return state;
      }
  }
  return state;
};

export default RecentlyViewed;
