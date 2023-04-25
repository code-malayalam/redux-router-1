import { createSlice } from '@reduxjs/toolkit';


const showDeleteSlice = createSlice({
    name: 'showDelete',
    initialState: true,
    reducers: {
        setShowDelete: (state, action) => {
            return action.payload;
        },
    },

});


export default showDeleteSlice.reducer;

const {setShowDelete} = showDeleteSlice.actions;

export {
    setShowDelete
}

