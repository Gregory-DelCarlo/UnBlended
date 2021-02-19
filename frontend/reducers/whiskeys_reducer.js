import merge from 'lodash/merge';
import { 
    RECEIVE_DRINKS, RECEIVE_DRINK, REMOVE_DRINK
} from '../actions/whiskey_actions';

const whiskeysReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = merge({}, state);

    switch(action.type) {
        case RECEIVE_DRINKS:
            return action.drinks;
        case RECEIVE_DRINK:
            nextState[action.drink.id] = action.drink;
            return nextState;
        case REMOVE_DRINK:
            delete nextState[action.drinkId];
            return nextState;
        default: 
            return state;
    }
}

export default whiskeysReducer;