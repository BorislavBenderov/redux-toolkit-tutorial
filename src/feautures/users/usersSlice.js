import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'John' },
    { id: '2', name: 'Colin' }
];

const usersSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    }
});

export const selectAllUsers = (state) => state.posts;


export default usersSlice.reducer;