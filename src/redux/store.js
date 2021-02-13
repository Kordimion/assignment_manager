import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import localSave from './middleware/localSave';
import lessonFilterSave from './middleware/lessonFilterSave';
import lessonsSave from './middleware/lessonSave';

export default configureStore({
    reducer: rootReducer,
    middleware: ((getDefaultMiddleware) => getDefaultMiddleware().concat(localSave,lessonFilterSave, lessonsSave)),
    devTools: process.env.NODE_ENV !== 'production',
});