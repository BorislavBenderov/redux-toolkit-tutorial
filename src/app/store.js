import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../feautures/counter/counterSlice';
import postsReducer from '../feautures/posts/postsSlice';
import usersReducer from '../feautures/users/usersSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        users: usersReducer
    }
});