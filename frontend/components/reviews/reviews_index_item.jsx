import React from 'react';
import {Link} from 'react-router-dom';

export default class ReviewsIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {review} = this.props;
        return (
            <div className='reviews-index' >
                <div className='review-title'>
                    <span id='user'>{review.user} </span>
                    is drinking a
                    <span id='drink'> {review.whiskey} </span>
                    at 
                    <span id='location'> {review.location} </span>
                </div>
                <div>{review.body}</div>
                <div>{review.rating}</div>
            </div>
        )
    }
}