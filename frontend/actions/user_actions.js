import {
    fetchUsers, fetchUser
} from '../util/user_utils';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const getUsers = () => dispatch => (
    fetchUsers()
        .then(users => dispatch(receiveUsers(users)))
);

export const getUser = userId => dispatch => (
    fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
);