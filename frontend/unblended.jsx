import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

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

});