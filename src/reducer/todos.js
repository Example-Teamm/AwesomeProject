const initialState = [];

const todos = (state= initialState, action) => {

    switch(action.type) {
        case 'ADD_TODO':
            let id = 0
            if(state.length > 0) {
                id = state[0].id + 1
            }
            const payload = {id: id, text:action.text, title:action.title}
            return [payload,...state]
            
        case 'UPDATE_TODO':
            let index = state.findIndex(element => element.id == action.id)
            const newState = [...state]
            newState[index] = {...newState[index], text:action.text, title:action.title}
            return newState

        case 'DELETE_TODO':
            if(action.id !== null) {
                return state.filter( todo => todo.id != action.id) 
            }   
        default:
        return state;    
    }
    
}
export default todos