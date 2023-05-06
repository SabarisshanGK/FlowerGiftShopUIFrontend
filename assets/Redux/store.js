import { combineReducers, legacy_createStore } from 'redux';
import RecentlyViewed from './Reducers/RecentlyViewed';

//REDUCERS
const Reducer = combineReducers({
  recent: RecentlyViewed,
});

//Store
const store = legacy_createStore(Reducer);

export default store;
