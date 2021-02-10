import { 
    login, logout, signup 
} from '../../util/session_api_util';


//------------------ACTION CONSTANTS-------------------

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


//------------------ACTIONS CREATORS---------------------

const receiveCurrentUser = user => {
    return({
        type: RECEIVE_CURRENT_USER,
        user
    });
}

const logoutCurrentUser = () => {
    return({
        type: LOGOUT_CURRENT_USER
    });
}

const receiveErrors = errors => {
    return({
        type: RECEIVE_ERRORS,
        errors
    });
}


//------------------THUNK ACTIONS CREATORS-----------------

export const createNewUser = formUser => dispatch => (
    signup(formUser)
        .then(user => dispatch(receiveCurrentUser(user)))
);

export const loginUser = formUser => dispatch => (
    login(formUser)
        .then( user => dispatch(receiveCurrentUser(user)))
);

export const logoutUser = () => dispatch => (
    logout()
        .then( () => dispatch(logoutCurrentUser())) 
);


