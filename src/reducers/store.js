
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import counterReducer from './counter';
import showDeleteReducer from './showDelete';
import userInfoReducer from './userInfo';

const reducer = combineReducers({
    counter: counterReducer,
    showDelete: showDeleteReducer,
    userInfo: userInfoReducer
});

const store = configureStore({
    reducer: reducer
})


//const store = createStore(reducer, applyMiddleware(thunk));

export default store;

