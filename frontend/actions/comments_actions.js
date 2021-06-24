import {
    fetchAllComments, fetchComments, createComment,
    updateComment, deleteComment
} from '../util/comment_utils';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';

const receiveAllComments = allComments => ({
    type: RECEIVE_ALL_COMMENTS,
    allComments
});

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

const removeComment = comment => ({
    type: REMOVE_COMMENT,
    comment
});

const addComment = comment => ({
    type: ADD_COMMENT,
    comment
});


export const getAllComments = ids => dispatch => (
    fetchAllComments(ids)
        .then(comments => dispatch(receiveAllComments(comments)))
);

export const getComments = reviewId => dispatch => (
    fetchComments(reviewId)
        .then(comments => dispatch(receiveComments(comments)))
);

export const newComment = comment => dispatch => (
    createComment(comment)
        .then(comment => dispatch(addComment(comment)))
);

export const editComment = comment => dispatch => (
    updateComment(comment)
        .then(comment => dispatch(addComment(comment)))
);

export const destroyComment = commentId => dispatch => (
    deleteComment(commentId)
        .then(comment => dispatch(removeComment(comment)))
);