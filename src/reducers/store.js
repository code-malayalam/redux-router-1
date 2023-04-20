import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import counterReducer from './counter';
import showDeleteReducer from './showDelete';
import userInfoReducer from './userInfo';

const reducer = combineReducers({
    counter: counterReducer,
    showDelete: showDeleteReducer,
    userInfo: userInfoReducer
});



const store = createStore(reducer, applyMiddleware(thunk));

export default store;

