import { CREATE_CHALLENGE } from '../actions/types';

export default (state = [], action) => {
    switch(action.type){
        case CREATE_CHALLENGE: 
            return [...state, action.payload]
        default: 
            return state
    }

};