import merge from 'lodash/merge';
import { 
    RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER 
} from '../actions/session_actions';


const _nullSession = {
    id: null
};

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    const nextState = merge({}, state);
    
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            nextState.id = action.user.id;
            return nextState;
        case LOGOUT_CURRENT_USER:
            nextState.id = null;
            return nextState;
        default:
            return nextState;
    }
}

export default sessionReducer;