import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./User/userReducer";
import thunk from "redux-thunk";
import { guestReducers } from "./Guest/guestReducers";

const reducers = combineReducers({
  userDetails: userReducer,
  guestState: guestReducers,
});

const userFromLocalStorage = JSON.parse(localStorage.getItem("user")) || {};

const initialState = {
  userDetails: {
    user: userFromLocalStorage,
  },
};

const middlewares = [thunk];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;