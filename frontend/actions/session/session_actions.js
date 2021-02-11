import { 
    login, logout, signup 
} from '../../util/session_api_util';


//------------------ACTION CONSTANTS-------------------

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";


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
        type: RECEIVE_SESSION_ERRORS,
        errors
    });
}

export const clearErrors = () => {
    return({
        type: CLEAR_SESSION_ERRORS
    })
}


//------------------THUNK ACTIONS CREATORS-----------------

export const createNewUser = formUser => dispatch => (
    signup(formUser)
        .then(user => ( 
            dispatch(receiveCurrentUser(user))
        ), errors => (
            dispatch(receiveErrors(errors.responseJSON))
        ))
);

export const loginUser = formUser => dispatch => (
    login(formUser)
        .then(user => ( 
            dispatch(receiveCurrentUser(user))
        ), errors => (
            dispatch(receiveErrors(errors.responseJSON))
        ))
);

export const logoutUser = () => dispatch => (
    logout()
        .then( () => dispatch(logoutCurrentUser())) 
);


