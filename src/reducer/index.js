import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import todos from './todos'
import photos from './photos'
import gameReducer from './game'  
export default combineReducers({  
    todos:todos,
    login: loginReducer,
    photos: photos,
    game: gameReducer
})
 