 import { 
    SIGN_IN,
    SIGN_OUT,
    CREATE_CHALLENGE,
    FETCH_CHALLENGE,
    FETCH_CHALLENGES
 } from './types';
 import cApi from '../../apis/challenges.js';
 import history from '../../history';

//create action creators

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createChallenge = (data) => async (dispatch, getState) => {
    // todo: remember to send the user who created the challenge e.g userID
    const response = await cApi.post('/challenges', data)
    dispatch({ type: CREATE_CHALLENGE, payload: response.data })
    history.push('/challenges');
}

/***
 * @description {fetchChallenge}
 * gets the current challenge object in scope
 * @returns function
 */

export const fetchChallenge = (id) => async (dispatch, getState) => {
    const response = await cApi.get(`/challenges/${id}`);
    dispatch({ type: FETCH_CHALLENGE, payload: response.data })
}

export const fetchChallenges = () => async (dispatch, getState) => {
    const response = await cApi.get('/challenges');
    dispatch({ type: FETCH_CHALLENGES, payload: response.data })
}

