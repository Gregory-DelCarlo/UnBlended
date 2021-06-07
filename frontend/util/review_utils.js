import React from 'react';

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

export const fetchSingleRatings = id => (
    $.ajax({
        url: 'api/single_drink_rating',
        method: 'GET',
        data: {id}
    })
);

export const fetchAllRatings = () => (
    $.ajax({
        url: 'api/all_drink_ratings',
        method: 'GET',
    })
);

export const getTime = review => {

    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ]

    let rFullDate = review.time.split('T');

    let rDate = rFullDate[0].split('-');
    let rTime = rFullDate[1].split(':');
    let reviewDate = new Date(
        `${rDate[0]} ${rDate[1]} ${rDate[2]}, ${rTime[0]}:${rTime[1]}:${rTime[2].slice(0,-1)} UTC`
    ).toString().split(' ');
    let currentDate = new Date().toString().split(' ');
    // date format
    // ["Tue", "May", "18", "2021", "22:37:22", "GMT-0700", "(Pacific", "Daylight", "Time)"]

    if (currentDate[1] === reviewDate[1]) {
        if (currentDate[2] === reviewDate[2]){
            let cTimeStamp = currentDate[4].split(':');
            let cHours = cTimeStamp[0];
            
            let rTimeStamp = reviewDate[4].split(':');
            let rHours = rTimeStamp[0];
            if(cHours === rHours) {
                let cMin = cTimeStamp[1];
                let rMin = rTimeStamp[1];
                if(cMin === rMin) {
                    return (
                        <span id='time'>seconds ago</span>
                    )
                } else if (cMin !== rMin) {
                    let minDiff = cMin - rMin
                    return (
                        <span id='time'>{minDiff} minute{checkS(minDiff)} ago</span>
                    )
                }
            } else if (cHours !== rHours) {
                let hrDiff = cHours - rHours;
                return (
                    <span id='time'>{hrDiff} hour{checkS(hrDiff)} ago</span>
                )
            }
        } else if (currentDate[2] !== reviewDate[2]) {
            let dayDiff = currentDate[2] - reviewDate[2];
            return (
                <span id='time'>{dayDiff} day{checkS(dayDiff)} ago</span>
            )
        }
    } else if (currentDate[1] !== reviewDate[1] && 
                currentDate[3] === reviewDate[3]) {
        let mnthDiff = (months.indexOf(currentDate[1]) + 1) - 
                        (months.indexOf(reviewDate[1]) + 1);
        return (
            <span id='time'>{mnthDiff} month{checkS(mnthDiff)} ago</span>
        )
    } else if (currentDate[1] !== reviewDate[1] && 
                currentDate[3] !== reviewDate[3]) {
        let yrDiff = currentDate[3] - reviewDate[3];
        return (
            <span id='time'>{yrDiff} year{checkS(yrDiff)} ago</span>
        )
    }

}

const checkS = diff => {
    if(diff > 1) {
        return <span id='plural'>s</span>
    }
}