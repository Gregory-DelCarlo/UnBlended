import merge from 'lodash/merge';
import { 
    RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER 
} from '../actions/session/session_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = merge({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.user.id] = user;
            return nextState;
        default:
            return state;
    }
}

export default usersReducer;