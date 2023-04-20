import { createStore, combineReducers } from 'redux'
import counterReducer from './counter';
import showDeleteReducer from './showDelete';
import userInfoReducer from './userInfo';

const reducer = combineReducers({
    counter: counterReducer,
    showDelete: showDeleteReducer,
    userInfo: userInfoReducer
});



const store = createStore(reducer);

export default store;


// store.subscribe(() => {

//     console.log('HELLO *** ', store.getState());
// });



// store.dispatch(incrementAction(4));


// store.dispatch(decrementAction());


// store.dispatch(resetAction());



