import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../feautures/counter/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});