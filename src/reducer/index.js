import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import todos from './todos'
  
export default combineReducers({  
    todos:todos,
    login: loginReducer
})
 