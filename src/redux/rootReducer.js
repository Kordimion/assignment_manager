import { combineReducers } from 'redux';
import assignmentsReducer from './ducks/assignments';
import lessonsFilterReducer from './ducks/lessonsFilter';

export default combineReducers({
    assignments: assignmentsReducer,
    currentLesson: lessonsFilterReducer
});