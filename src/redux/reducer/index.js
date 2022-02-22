import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  user: userReducer,
  modal: modalReducer,
});

export default reducers;
