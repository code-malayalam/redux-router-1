import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const fetchUserInfo = createAsyncThunk('userInfo', () => {
    return fetch('/data.json')
        .then((response) => response.json());
});

const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState: {
        data: [],
        error: '',
        loading: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserInfo.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchUserInfo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;

        });
        builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;

        });
    }

});

export default userInfoSlice.reducer;

export {
    fetchUserInfo
}

