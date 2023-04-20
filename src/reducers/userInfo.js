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

function fetchUserInfo() {
    return function(dispatch, state) {
        dispatch(setLoadingAction(true));
        fetch('/data.json')
            .then((response) => response.json())
            .then((data) => {
                dispatch(setDataAction(data))
                dispatch(setLoadingAction(false));
            })
            .catch((err) => {
                dispatch(setErrorAction('An Error Occured'))
                dispatch(setLoadingAction(false));
            })
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
        type: 'SET_ERROR',
        payload: err
    };
}

export default userInfoReducer;

export {
    fetchUserInfo
}

