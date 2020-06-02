import { combineReducers } from "redux";
import cartReducer from "./cart";


const rootReducer = combineReducers({
    cartReducer: cartReducer,
})

export default rootReducer;