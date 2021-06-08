export const fetchAllComments = ids => (
    $.ajax({
        url: '/api/comments',
        method: 'GET',
        data: {ids}
    })
);

export const fetchComments = reviewId => (
    $.ajax({
        url: `/api/comments/${reviewId}`,
        method: 'GET'
    })
);

export const createComments = comment => (
    $.ajax({
        url: '/api/comments',
        method: 'POST',
        data: {comment}
    })
);

export const updateReview = comment => (
    $.ajax({
        url: `/api/comments/${comment.id}`,
        method: 'PUT',
        data: {comment}
    })
);

export const deleteComment = commentId => (
    $.ajax({
        url: `/api/comments/${commentId}`,
        method: 'DELETE'
    })
);