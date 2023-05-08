import { combineReducers, legacy_createStore } from 'redux';
import RecentlyViewed from './Reducers/RecentlyViewed';
import WishListItem from './Reducers/WishListItem';
import CartReducer from './Reducers/CartReducer';

//REDUCERS
const Reducer = combineReducers({
  recent: RecentlyViewed,
  wishlist: WishListItem,
  cart: CartReducer,
});

//Store
const store = legacy_createStore(Reducer);

export default store;
