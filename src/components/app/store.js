import { configureStore } from '@reduxjs/toolkit';
import useSlice from '../reducer/useSlice';

export default configureStore({
    reducer: {
        user: useSlice
    }
})