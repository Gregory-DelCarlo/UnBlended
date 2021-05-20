import merge from 'lodash/merge';
import {
    RECIEVE_DISTILLERIES, RECEIVE_DISTILLERY
} from '../actions/distillery_actions';

const distilleriesReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = merge({}, state);

    switch(action.type) {
        case RECIEVE_DISTILLERIES:
            return action.distilleries;
        case RECEIVE_DISTILLERY:
            nextState[action.distillery.id] = action.distillery;
            return nextState;
        default:
            return state;
    }
}

export default distilleriesReducer;