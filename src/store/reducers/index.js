import { combineReducers } from 'redux';
import authReducer from './authReducer';
import challengesReducer from './challengesReducer';

export default combineReducers({
    auth: authReducer,
    challenges: challengesReducer
});