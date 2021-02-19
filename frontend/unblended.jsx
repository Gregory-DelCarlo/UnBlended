import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import { 
//     login, logout, signup 
// } from './util/session_api_util'
import { 
    getDrinks
} from './actions/whiskey_actions';
// import {
//     createNewUser, loginUser, logoutUser
// } from './actions/session/session_actions';

let preLoadedState = {}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    if (window.currentUser) {
        preLoadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
    };

    const store = configureStore(preLoadedState);
    delete window.currentUser;
    ReactDOM.render(<Root store={store} />, root);


    window.store = store;
    // window.login = login;
    // window.logout = logout;
    // window.signup = signup;
    // window.login = loginUser;
    // window.logout = logoutUser;
    // window.signup = createNewUser;
    window.getDrinks = getDrinks;
});