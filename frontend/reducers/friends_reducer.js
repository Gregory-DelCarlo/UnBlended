import merge from 'lodash/merge';
import {
    RECEIVE_FRIENDS, REMOVE_FRIEND, ADD_NEW_FRIEND
} from '../actions/friend_actions';

const friendsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = merge({}, state);

    switch(action.type) {
        case RECEIVE_FRIENDS:
            return action.friends;
        case REMOVE_FRIEND:
            let friends = nextState[action.user1]
            if (friends) {
                let newFriends = removeFriend(friends, action.user2)
                nextState[action.user1] = newFriends;   
            }
            return nextState;
        case ADD_NEW_FRIEND:
            nextState[action.user1].push(action.user2);
            return nextState;
        default: 
            return state;
    }
}


const removeFriend = (arr, ele) => {
    return arr.filter(e => (e !== ele));
}

export default friendsReducer;