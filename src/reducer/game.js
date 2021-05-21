const initialState={isXChance:true,
                    boxes:Array(9).fill(null),
                    history:[],
                    winner:null
                 };


const gameReducer = (state=initialState, action) =>{
    switch(action.type){        
        case 'TURN':
            let newHistory = [...state.history, action.no]
            state.boxes[action.no] = action.player 
            return {isXChance: !state.isXChance,
                boxes: state.boxes,
                history: newHistory,
                winner:null
                }                 
        case 'UNDO':
            let boxNo = state.history[state.history.length - 1]
            state.history.pop()
            state.boxes[boxNo] = null
            return {isXChance: !state.isXChance,
                boxes: state.boxes,
                history: state.history,
                winner:null
                }
        case 'RELOAD':
            return {isXChance: true,
                boxes: Array(9).fill(null),
                history: [],
                winner:null
                }
        case 'WIN':
            return {isXChance: state.isXChance,
                boxes: state.boxes,
                history: state.history,
                winner:action.winner
                }    
        default:
            return state;
    }
}

export default gameReducer