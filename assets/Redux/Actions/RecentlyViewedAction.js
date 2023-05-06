import { RECENTLY_VIEWED } from '../constants';

export const addToRecentlyViewed = (payload) => {
  return {
    type: RECENTLY_VIEWED,
    payload,
  };
};
