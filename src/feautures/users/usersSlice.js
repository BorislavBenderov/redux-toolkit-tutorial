import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'John' },
    { id: '2', name: 'Colin' }
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
});

export const selectAllUsers = (store) => store.users;


export default usersSlice.reducer;