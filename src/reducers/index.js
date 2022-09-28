import { combineReducers } from "redux";
import favReducer from '../features/AddFav'
import Services from "./Services"

export default combineReducers({
    Services,
    addFav: favReducer
})
