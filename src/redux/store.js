import { createStore } from "redux";
import ProductReducer from "./ProductReducer/ProductReducer";

const store = createStore(ProductReducer);

export default store;