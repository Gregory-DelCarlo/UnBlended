export const fetchFriends = id => (
    $.ajax({
        url: '/api/friends',
        method: 'GET',
        data: {id}
    })
);

export const createFriends = (user1, user2) => (
    $.ajax({
        url: '/api/friends',
        method: 'POST',
        data: {user1, user2}
    })
);

export const deleteFriends = (user1, user2) => (
    $.ajax({
        url: '/api/friends',
        method: 'DELETE',
        data: {user1,  user2}
    })
);