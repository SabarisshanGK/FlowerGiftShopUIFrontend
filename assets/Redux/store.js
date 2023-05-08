import { combineReducers, legacy_createStore } from 'redux';
import RecentlyViewed from './Reducers/RecentlyViewed';
import WishListItem from './Reducers/WishListItem';

//REDUCERS
const Reducer = combineReducers({
  recent: RecentlyViewed,
  wishlist: WishListItem,
});

//Store
const store = legacy_createStore(Reducer);

export default store;
