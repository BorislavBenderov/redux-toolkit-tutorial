import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'Redux Toolkit', content: 'Hello world' },
    { id: '2', title: 'Slices', content: 'Slice this' }
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
});

export default postsSlice.reducer;