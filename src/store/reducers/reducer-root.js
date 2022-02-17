import { combineReducers } from "redux";
import { postsReducer } from "./reducer-posts";

const rootReducer = combineReducers({
  currencies: postsReducer,
});

export default rootReducer;
