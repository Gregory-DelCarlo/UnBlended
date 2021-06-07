import {
    fetchFriends, createFriends, deleteFriends
} from '../util/friend_utils'

export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';
export const ADD_NEW_FRIEND = 'ADD_NEW_FRIEND';

const receiveFriends = friends => ({
    type: RECEIVE_FRIENDS,
    friends
})

const removeFriend = (user1, user2) => ({
    type: REMOVE_FRIEND,
    user1,
    user2
})

const addNewFriend = (user1, user2) => ({
    type: ADD_NEW_FRIEND,
    user1,
    user2
})


export const getFriends = id => dispatch => (
    fetchFriends(id)
        .then(friends => dispatch(receiveFriends(friends)))
);

export const newFriend = (user1, user2) => dispatch => (
    createFriends(user1, user2)
        .then(() => dispatch(addNewFriend(user1, user2)))
);

export const destroyFriend = (user1, user2) => dispatch => (
    deleteFriends(user1, user2)
        .then(() => dispatch(removeFriend(user1, user2)))
)