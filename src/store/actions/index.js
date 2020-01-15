 import { 
    SIGN_IN,
    SIGN_OUT,
    CREATE_CHALLENGE
 } from './types';
 import challenges from '../../apis/challenges.js';
 import history from '../../history';

//create action creators 
console.log(`challenges ${challenges}`)
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
    const response = await challenges.post('/challenges', data)
    dispatch({ type: CREATE_CHALLENGE, payload: response.data })
    history.push('/challenges');
}
