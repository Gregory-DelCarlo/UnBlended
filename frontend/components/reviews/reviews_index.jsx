import React from 'react';
import { Link } from 'react-router-dom';
import ReviewsIndexItemContainer from './reviews_index_item_container';

export default class ReviewsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.props.getReviews(this.props.id);
        this.createReviews = this.createReviews.bind(this);
    }

    createReviews() {
        const { reviews } = this.props;
        return Object.values(reviews).map( review => (
            <ReviewsIndexItemContainer
                key={review.id}
                review={review}
            />
        ));
    }

    render() {
        return (
            <div className='drink-reviews' >
                <h2>Global Recent Activity</h2>
                <div className='line'></div>
                {this.createReviews()}
            </div>
        )
    }
}