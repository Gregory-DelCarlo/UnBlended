import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import { 
//     login, logout, signup 
// } from './util/session_api_util'
import {
    createNewUser, loginUser, logoutUser
} from './actions/session/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    ReactDOM.render(<Root store={store} />, root);


    window.store = store;
    // window.login = login;
    // window.logout = logout;
    // window.signup = signup;
    window.login = loginUser;
    window.logout = logoutUser;
    window.signup = createNewUser;
});