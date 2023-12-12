import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

// menampung state global
export default store;