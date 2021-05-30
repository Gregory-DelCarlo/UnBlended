import React from 'react';
import { Link } from 'react-router-dom';
import ReviewsIndexItemContainer from './reviews_index_item_container';

export default class ReviewsIndex extends React.Component {
    constructor(props) {
        super(props);
        if(this.props.type === 'Drink'){
            this.props.getReviews(this.props.type, this.props.id);
        } else if(this.props.type === 'All'){
            this.props.getReviews(this.props.type)
        }
        this.props.getUsers();
        this.createReviews = this.createReviews.bind(this);
    }

    createReviews() {
        if(this.props.type === 'Drink') {
            const {drink, distillery, reviews, users} = this.props;
            if (drink && distillery && reviews && users) {
                return Object.values(reviews).reverse().map( review => (
                    <ReviewsIndexItemContainer
                    key={review.id}
                    review={review}
                    distillery={distillery}
                    drink={drink}
                    user={users[review.user]}
                    updateReviews={this.props.updateReviews}
                    type={this.props.type}
                    />
                    ));
            } else {
                return (
                    <div>Loading Reviews...</div>
                )
            }
        } else if (this.props.type === 'All') {
            const {drinks, distilleries, reviews, users} = this.props;
            if (drinks && distilleries && reviews && users) {
                return Object.values(reviews).reverse().map( review => {
                    const drink = drinks[review.whiskey];
                    const distillery = distilleries[drink.distillery]
                    return (
                        <ReviewsIndexItemContainer
                            key={review.id}
                            review={review}
                            distillery={distillery}
                            drink={drink}
                            user={users[review.user]}
                            type={this.props.type}
                        />
                    )
                });
            } else {
                return (
                    <div>Loading Reviews...</div>
                )
            }
        }
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