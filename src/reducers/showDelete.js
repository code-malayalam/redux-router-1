
function showDeleteReducer(state = true, action) {
    switch (action.type) {
        case 'SET_SHOW_DELETE':
            return action.payload;
        default:
            return state;
    }
}


function setShowDelete(isShow) {
    return {
        type: 'SET_SHOW_DELETE',
        payload: isShow
    };
}

export default showDeleteReducer;

export {
    setShowDelete
}

