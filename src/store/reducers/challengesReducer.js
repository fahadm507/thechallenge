import { 
    FETCH_CHALLENGES,
    FETCH_CHALLENGE,
    CREATE_CHALLENGE,
    DELETE_CHALLENGE,
    UPDATE_CHALLENGE
 } from '../actions/types';

export default(state=[], action) => {
    switch(action.type){
        case FETCH_CHALLENGES: 
            const challenges = Object.values(action.payload)
            return [ ...challenges]
        case CREATE_CHALLENGE:
            return [ ...state, action.payload]
        case FETCH_CHALLENGE:
            return [ ...state, action.payload]
        case UPDATE_CHALLENGE:
            return [ ...state, action.payload]
        case DELETE_CHALLENGE:
            return [ ...state.filter(challenge => challenge.id !== action.payload)]
        default:
            return state
    }
};