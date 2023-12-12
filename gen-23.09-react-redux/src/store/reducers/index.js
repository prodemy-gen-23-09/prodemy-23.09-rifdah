import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

// combineReducer menggabungkan reducer
export default combineReducers({
  cart: cartReducer,
})