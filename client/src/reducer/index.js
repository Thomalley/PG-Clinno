const initialState = {
    clientes : []
};




const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case "GET_CLIENTES" :
            return {
                ...state,
                clientes : action.payload
            }
        default :
            return state;

    }
}

export default rootReducer;