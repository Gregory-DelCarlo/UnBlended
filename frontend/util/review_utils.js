export const fetchReviews = (type, id) => (
    $.ajax({
        url: '/api/reviews',
        method: 'GET',
        data: { type, id }
    })
);

export const fetchReview = reviewId => (
    $.ajax({
        url: `api/reviews/${reviewId}`,
        method: 'GET'
    })
);

export const createReview = review => (
    $.ajax({
        url: '/api/reviews',
        method: 'POST',
        data: { review }
    })
);

export const updateReview = review => (
    $.ajax({
        url: `/api/reviews/${review.id}`,
        method: 'PATCH',
        data: { review }
    })
);

export const deleteReview = (reviewId, userId) => (
    $.ajax({
        url: `api/reviews/${reviewId}`,
        method: 'DELETE',
        data: {userId}
    })
);

export const fetchRatings = id => (
    $.ajax({
        url: 'api/ratings',
        method: 'GET',
        data: {id}
    })
)