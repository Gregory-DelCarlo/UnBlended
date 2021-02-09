import merge from 'lodash/merge';

const sessionReducer = (state ={}, action) => {
    Object.freeze(state);
    const nextState = merge({}, state);
    
    switch(action.type) {
        default:
            return state;
    }
}

export default sessionReducer;