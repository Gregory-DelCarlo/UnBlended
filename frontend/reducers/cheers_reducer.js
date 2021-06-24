import merge from 'lodash.merge';
import {
    RECEIVE_ALL_CHEERS, RECEIVE_CHEERS, 
    REMOVE_CHEERS, ADD_CHEERS
} from '../actions/cheers_actions';

const cheersReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = merge({}, state);

    switch(action.type) {
        case RECEIVE_ALL_CHEERS:
            return action.allCheers;
        case RECEIVE_CHEERS:
            const newState = merge(action.cheers, nextState);
            return newState;
        case REMOVE_CHEERS:
            delete nextState[action.reviewId][action.userId];
            return nextState;
        case ADD_CHEERS:
            nextState[Object.keys(action.cheers)[0]] << Object.values(action.cheers)[0];
            return nextState
        default: 
            return nextState;
    }
}

export default cheersReducer;