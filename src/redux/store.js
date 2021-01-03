import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import localSave from './middleware/localSave';

export default configureStore({
    reducer: rootReducer,
    middleware: localSave
});