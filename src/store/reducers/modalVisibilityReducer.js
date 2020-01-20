import { SHOW_DELETE_CHALLENGE_MODAL } from '../actions/types';

export default (state = false, action) => {
    switch(action.type) {
        case SHOW_DELETE_CHALLENGE_MODAL: 
            return action.payload
        default: 
            return state;
    }
};