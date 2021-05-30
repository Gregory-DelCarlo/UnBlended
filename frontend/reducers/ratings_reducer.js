import { RECEIVE_RATINGS } from '../actions/review_actions';

const ratingsReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_RATINGS:
            return action.ratings;
        default:
            return state;
    }
}

export default ratingsReducer;