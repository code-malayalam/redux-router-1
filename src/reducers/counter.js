
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        incrementAction: (state, action) => {
            return state + action.payload;
        },
        decrementAction: (state, action) => {
            return state - action.payload;
        },
        resetAction:  (state, action) => {
            return 0;
        },
    }

});


const {incrementAction, decrementAction, resetAction} = counterSlice.actions;

console.log(counterSlice.actions);


export default counterSlice.reducer;

export {
    incrementAction, decrementAction, resetAction
}
