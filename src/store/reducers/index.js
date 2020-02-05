import { combineReducers } from 'redux';
import authReducer from './authReducer';
import challengesReducer from './challengesReducer';
import modalVisibilityReducer from './modalVisibilityReducer';
import fetchChallengeReducer from './fetchChallengeReducer';

export default combineReducers({
    auth: authReducer,
    challenges: challengesReducer,
    challenge: fetchChallengeReducer,
    showDeleteChallengeModal: modalVisibilityReducer
});