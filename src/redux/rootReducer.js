import { combineReducers } from 'redux';
import assignmentsReducer from './ducks/assignments';
import lessonsFilterReducer from './ducks/lessonsFilter';
import lessonsReducer from './ducks/lessons';

export default combineReducers({
    assignments: assignmentsReducer,
    currentLesson: lessonsFilterReducer,
    lessons: lessonsReducer
});