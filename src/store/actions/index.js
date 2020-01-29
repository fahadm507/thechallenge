 import { 
    SIGN_IN,
    SIGN_OUT,
    CREATE_CHALLENGE,
    UPDATE_CHALLENGE,
    DELETE_CHALLENGE,
    FETCH_CHALLENGE,
    FETCH_CHALLENGES
 } from './types';
 import cApi from '../../apis/challenges.js';
 import history from '../../history';

// Auth action creators
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

// modal visibility action creators 
export { showDeleteChallengeModal } from './modalVisibility';

// Challenge action creators
export const createChallenge = (data) => async (dispatch, getState) => {
    const { userId } = getState().auth;

    const payload = Object.assign({ userId }, data)
    const response = await cApi.post('/challenges', payload)
    dispatch({ type: CREATE_CHALLENGE, payload: response.data })
    history.push('/challenges');
}

export const updateChallenge = (challengeId, data) => async (dispatch, getState) => {
    // todo: Check to see if this user has permissions to modify this challenge
    try {
        const response = await cApi.patch(`/challenges/${challengeId}`, data);
        dispatch({ type: UPDATE_CHALLENGE, payload: response.data })
        history.push('/')
    } catch (e) {
        history.push(`/challenges/edit/${challengeId}`);
    }  
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
    try {
        const response = await cApi.get('/challenges');
        dispatch({ type: FETCH_CHALLENGES, payload: response.data })
    } catch(e){
        console.log(`
        Something went wrong while trying to fetch challenges: 
        ${e.message}
        `)
    }
}

export const deleteChallenge = (challengeId) => async (dispatch, getState) => {
    try { 
        await cApi.delete(`/challenges/${challengeId}`);
        dispatch({ type: DELETE_CHALLENGE, payload: challengeId})
        history.push('/challenges');
    } catch(e) {
        console.log(`
        Something went wrong while trying to fetch challenges: 
        ${e.message}
        `)
    }
 

}

