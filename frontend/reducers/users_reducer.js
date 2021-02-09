import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = merge({}, state);
    const { user } = action.user;

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[user.id] = user;
            return nextState;
        default:
            return state;
    }
}

export default usersReducer;