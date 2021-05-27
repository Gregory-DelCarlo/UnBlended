import {
    fetchReviews, fetchReview, createReview, 
    updateReview, deleteReview, fetchSingleRatings,
    fetchAllRatings
} from '../util/review_utils';


//----------------------ACTION CONSTANTS--------------------
// use these in your reducer to ensure correct case is found


export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_RATINGS = 'RECEIVE_RATINGS';


//-----------------------ACTION CREATORS---------------------
// these get sent to your reducer by your action thunk creators to update state


const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
});

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
});

const receiveRatings = ratings => ({
    type: RECEIVE_RATINGS,
    ratings
});


//----------------------ACTION THUNK CREATORS-----------------
// add these to component containers to get information from the backend into state


export const getReviews = (type, id) => dispatch => (
    fetchReviews(type, id)
        .then(reviews => dispatch(receiveReviews(reviews)))
);

export const getReview = reviewId => dispatch => (
    fetchReview(reviewId)
        .then(review => dispatch(receiveReview(review)))
);

export const newReview = review => dispatch => (
    createReview(review)
        .then(review => dispatch(receiveReview(review)))
);

export const editReview = review => dispatch => (
    updateReview(review)
        .then(review => dispatch(receiveReview(review)))
);

export const destroyReview = (reviewId, userId) => dispatch => (
    deleteReview(reviewId, userId)
        .then(review => dispatch(removeReview(review.id)))
);

export const getSingleRating = id => dispatch => (
    fetchSingleRatings(id)
        .then(rating => dispatch(receiveRatings(rating)))
);

export const getAllRatings = () => dispatch => (
    fetchAllRatings()
        .then(ratings => dispatch(receiveRatings(ratings)))
);