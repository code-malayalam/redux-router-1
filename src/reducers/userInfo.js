const INITIAL_STATE = {
    data: [],
    error: '',
    loading: false
}

function userInfoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_DATA':
           return {
            ...state,
            data: action.payload
           };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            };

        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

function setDataAction(data = []) {
    return {
        type: 'SET_DATA',
        payload: data
    };
}

function setLoadingAction(isLoading) {
    return {
        type: 'SET_LOADING',
        payload: isLoading
    };
}

function setErrorAction(err) {
    return {
        type: 'INCREMENT',
        payload: err
    };
}

export default userInfoReducer;

export {
    setDataAction,
    setLoadingAction,
    setErrorAction
}

