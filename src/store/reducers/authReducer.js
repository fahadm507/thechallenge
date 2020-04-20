import { SIGN_IN, SIGN_OUT } from '../actions/types'
const INITIAL_STATE = {
    isSignedIn: null, 
    userId: null, 
    currentUser: null
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SIGN_IN: 
            return { ...state, isSignedIn: true, currentUser: action.payload}
        case SIGN_OUT: 
        return { ...state, isSignedIn: false, userId: null, currentUser: null }
        default: 
           return state
    }  
} 