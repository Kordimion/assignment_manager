import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import localSave from './middleware/localSave';
import lessonFilterSave from './middleware/lessonFilterSave';

export default configureStore({
    reducer: rootReducer,
    middleware: ((getDefaultMiddleware) => getDefaultMiddleware().concat(localSave,lessonFilterSave )),
    devTools: process.env.NODE_ENV !== 'production',
});