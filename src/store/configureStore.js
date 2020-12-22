import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import actionNames from "../reducers";

const middlewares = [thunk];
const rootReducer = combineReducers({
    actionNames
});

export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);