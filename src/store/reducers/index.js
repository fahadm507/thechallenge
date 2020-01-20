import { combineReducers } from 'redux';
import authReducer from './authReducer';
import challengesReducer from './challengesReducer';
import modalVisibilityReducer from './modalVisibilityReducer';

export default combineReducers({
    auth: authReducer,
    challenges: challengesReducer,
    showDeleteChallengeModal: modalVisibilityReducer
});