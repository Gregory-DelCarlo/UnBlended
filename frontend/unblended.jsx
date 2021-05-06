import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {
    getReviews, getReview, newReview, editReview, destroyReview
} from './actions/review_actions';

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
    window.getReviews = getReviews;
    window.getReview = getReview;
    window.newReview = newReview;
    window.editReview = editReview;
    window.destroyReview = destroyReview;

});