const initialState = [];


const loginReducer = (state=initialState, action) =>{
    switch(action.type){        
        case 'REGISTER':
            return [action.payload, ...state]    
        case 'LOGOUT':
             return {}   
        default:
            return state;
    }
}

export default loginReducer