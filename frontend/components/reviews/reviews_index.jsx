import React from 'react';
import { Link } from 'react-router-dom';
import ReviewsIndexItem from './reviews_index_item';

export default class ReviewsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.props.getReviews(this.props.id);
        this.createReviews = this.createReviews.bind(this);
        // this.state = {
        //     reviews: this.createReviews()
        // };
    }

    createReviews() {
        const { reviews, distilleries, users } = this.props;
        return Object.values(reviews).map( review => (
            <ReviewsIndexItem
                key={review.id}
                review={review}
            />
        ));;
    }

    render() {
        return (
            <div className='drink-reviews' >
                <h2>Global Recent Activity</h2>
                <div className='line'></div>
                {this.createReviews()}
                {/* {
                    this.state.reviews ? 
                        this.state.reviews : 
                        this.setState({reviews: this.createReviews()})
                } */}
            </div>
        )
    }
}