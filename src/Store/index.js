import { createStore, combineReducers } from 'redux';
import  shopCart from "../reducers/ShopCart"

const rootReducer = combineReducers({
  cart: shopCart,
});

const store = createStore(rootReducer);

export default store;
