import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../feautures/counter/counterSlice';
import postsReducer from '../feautures/posts/postsSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer
    }
});