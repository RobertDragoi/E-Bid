import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import auctionReducer from "./reducers/auctionReducer";
const initialState = {};

const middleware = [thunk];
const reducers = combineReducers({
  user: userReducer,
  auction: auctionReducer,
});
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
