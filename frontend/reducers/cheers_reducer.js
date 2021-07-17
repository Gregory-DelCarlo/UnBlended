import merge from 'lodash/merge';
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
            var newState = merge(action.cheers, nextState);
            return newState;
        case REMOVE_CHEERS:
            var newCheers = nextState[action.reviewId].filter(cheer => cheer !== action.userId);
            nextState[action.reviewId] = newCheers;
            return nextState;
        case ADD_CHEERS:
            nextState[Object.keys(action.cheers)[0]] = Object.values(action.cheers);
            return nextState;
        default: 
            return nextState;
    }
}

export default cheersReducer;