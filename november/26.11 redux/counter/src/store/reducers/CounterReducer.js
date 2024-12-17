const initialState = {
    counter:0
}

const counterReducer =(state=initialState, action) =>{
    switch(action.type){
        case "PLUS_COUNTER":
            return{
                ...state,
                counter: state.counter +1
            }

        case "MINUS_COUNTER":
            return{
                ...state,
                counter: state.counter -1
            }
        default : return state 
    }
}

export default counterReducer