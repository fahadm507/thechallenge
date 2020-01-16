import { 
    FETCH_CHALLENGES,
    FETCH_CHALLENGE,
    CREATE_CHALLENGE
 } from '../actions/types';

export default(state={}, action) => {
    switch(action.type){
        case FETCH_CHALLENGES: 
            return {...state, ...action.payload}
        case CREATE_CHALLENGE:
            return {...state, ...action.payload}
        case FETCH_CHALLENGE:
            return {...state, ...action.payload }
        default:
            return state
    }
};