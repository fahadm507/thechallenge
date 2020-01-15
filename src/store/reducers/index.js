import { combineReducers } from 'redux';
import authReducer from './authReducer';
import createChallengeReducer from './createChallengeReducer';

export default combineReducers({
    auth: authReducer,
    createChallenge: createChallengeReducer
});