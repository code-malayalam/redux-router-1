
function counterReducer(state = 0, action) {

    switch (action.type) {
        case 'INCREMENT':
           return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}


// Action Creators
function incrementAction(val = 1) {
    return {
        type: 'INCREMENT',
        payload: val
    };
}

function decrementAction(val = 1) {
    return {
        type: 'DECREMENT',
        payload: val
    };
}

function resetAction() {
    return {
        type: 'RESET',
    };
}

export default counterReducer;

export {
    incrementAction,
    decrementAction,
    resetAction
}
