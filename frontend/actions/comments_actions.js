import {
    fetchAllComments, fetchComments, createComments,
    updateComment, deleteComment
} from '../util/comment_utils';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';

const receiveAllComments = comments => ({
    type: RECEIVE_ALL_COMMENTS,
    comments
});

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

const removeComments = comment => ({
    type: REMOVE_COMMENT,
    comment
});

const addComment = comment => ({
    type: ADD_COMMENT,
    comment
});

    