const initialState = {
    maintenance: null,
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'RECEIVE_MAINTENANCE_DATA':
            return { ...state, maintenance: action.payload };
        default:
            return state;
    }
}

export default rootReducer;