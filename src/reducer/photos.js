const initialState = [];

const photos = (state= initialState, action) => {

    switch(action.type) {
        case 'ADD_PHOTOS':
            return [...state,...action.photos]
    
        case 'UPDATE_PHOTOS':
            return action.photos    
        default:
        return state;    
    }
    
}
export default photos