import {
    toggleCheers, fetchAllCheers, fetchCheers
} from '../util/cheers_utils';

export const RECEIVE_ALL_CHEERS = 'RECEIVE_ALL_CHEERS';
export const RECEIVE_CHEERS = 'RECEIVE_CHEERS';
export const REMOVE_CHEERS = 'REMOVE_CHEERS';
export const ADD_CHEERS = 'ADD_CHEERS';

const receiveCheers = cheers => ({
    type: RECEIVE_CHEERS,
    cheers
});

const receiveAllCheers = allCheers => ({
    type: RECEIVE_ALL_CHEERS,
    allCheers
});

const addCheers = cheers => ({
    type: ADD_CHEERS,
    cheers
})

const removeCheers = (reviewId, userId) => ({
    type: REMOVE_CHEERS,
    reviewId,
    userId
});

export const getAllCheers = ids => dispatch => (
    fetchAllCheers(ids)
        .then(cheers => dispatch(receiveAllCheers(cheers)))
);

export const getCheers = reviewId => dispatch => (
    fetchCheers(reviewId)
        .then(cheers => dispatch(receiveCheers(cheers)))
);

export const addRemoveCheers = (reviewId, userId) => dispatch => (
    toggleCheers(reviewId, userId)
        .then(cheers => {
            if (cheers instanceof Array) {
                dispatch(removeCheers(reviewId, userId));
            } else {
                dispatch(addCheers(cheers));
            }
        })
);