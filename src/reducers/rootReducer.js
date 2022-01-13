import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

// llamando todos los reducer con sus accionesb
export const rootReducer = combineReducers({
    products: productReducer
});