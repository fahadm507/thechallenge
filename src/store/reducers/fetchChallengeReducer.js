import { 
    FETCH_CHALLENGE
 } from '../actions/types';

export default (state={}, action) => {
    switch(action.type){
        case FETCH_CHALLENGE:
            return action.payload;
        default: 
            return state
    }
};