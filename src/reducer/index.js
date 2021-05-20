import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import todos from './todos'
import photos from './photos'
  
export default combineReducers({  
    todos:todos,
    login: loginReducer,
    photos: photos
})
 