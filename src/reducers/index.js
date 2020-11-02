import { combineReducers } from "redux";
import basketReducer from "./basketReducer"
import productReducer from "./productReducer";
import viewProduct from "./productReducer";

export default combineReducers({
    basketState: basketReducer,
    productSearch : productReducer,
    viewProduct : viewProduct,
})