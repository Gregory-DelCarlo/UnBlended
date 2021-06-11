export const toggleCheers = (reviewId, userId) => (
    $.ajax({
        url: '/api/toggle_cheers',
        method: 'POST',
        data: {reviewId, userId}
    })
);

export const fetchAllCheers = ids => (
    $.ajax({
        url: '/api/all_cheers',
        method: 'GET',
        data: {ids}
    })
);

export const fetchCheers = reviewId => (
    $.ajax({
        url: `/api/cheers/${reviewId}`,
        method: 'GET',
    })
);