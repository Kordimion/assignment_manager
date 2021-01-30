import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import localSave from './middleware/localSave';

export default configureStore({
    reducer: rootReducer,
    middleware: ((getDefaultMiddleware) => getDefaultMiddleware().concat(localSave)),
    devTools: process.env.NODE_ENV !== 'production',
});