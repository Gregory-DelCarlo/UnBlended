import merge from 'lodash/merge';
import {
    RECEIVE_ALL_COMMENTS, RECEIVE_COMMENTS,
    REMOVE_COMMENT, ADD_COMMENT
} from '../actions/comments_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = merge({}, state);

    switch(action.type) {
        case RECEIVE_ALL_COMMENTS:
            return action.allComments;
        case RECEIVE_COMMENTS:
            const newState = merge(action.comments, nextState);
            return newState;
        case ADD_COMMENT:

        case REMOVE_COMMENT:
            nextState[action.comment.review].forEach(comment => {
                if (comment.id === action.comment.id) {
                    comment = '';
                };
            });
            nextState.filter(comment => (comment !== ''));
            return nextState;
        default: 
            return nextState;
    }
}

export default commentsReducer;


