import React from 'react';
import { Link } from 'react-router-dom';
import ReviewsIndexItemContainer from './reviews_index_item_container';

export default class ReviewsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.props.getReviews(this.props.id);
        this.props.getUsers();
        this.createReviews = this.createReviews.bind(this);
    }

    createReviews() {
        const { reviews, distillery, drink, users } = this.props;
        return Object.values(reviews).reverse().map( review => (
            <ReviewsIndexItemContainer
                key={review.id}
                review={review}
                distillery={distillery}
                drink={drink}
                user={users[review.user]}
                updateReviews={this.props.updateReviews}
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