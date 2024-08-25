import { createStore } from "redux";
// import { createStore } from "react-redux";
import reducer from "./reducer/reducer";

let store = createStore(reducer);

export default store;
