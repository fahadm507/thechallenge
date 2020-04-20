import { 
    FETCH_CHALLENGES,
    CREATE_CHALLENGE,
    DELETE_CHALLENGE,
    UPDATE_CHALLENGE
 } from '../actions/types';

export default(state=[], action) => {
    switch(action.type){
        case FETCH_CHALLENGES: 
            return [ ...Object.values(action.payload)];
        case CREATE_CHALLENGE:
            return [ ...state, action.payload];
        case UPDATE_CHALLENGE:
            return [ ...state, action.payload];
        case DELETE_CHALLENGE:
            return [ ...state.filter(challenge => challenge.id !== action.payload)];
        default:
            return state;
    }
};