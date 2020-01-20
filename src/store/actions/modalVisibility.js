import { SHOW_DELETE_CHALLENGE_MODAL  } from './types';

export const showDeleteChallengeModal = (visible) => {
    return {
        type: SHOW_DELETE_CHALLENGE_MODAL, 
        payload: visible
    }
}