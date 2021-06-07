import React from 'react';
import Navbar from '../navbar/navbar';
import { getTime } from '../../util/review_utils';

export default class ReviewsShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getReview()
            .then(() => {
                const {review} = this.props;
                this.props.getDrink(review.whiskey)
                    .then(() => {
                        const {drink} = this.props;
                        this.props.getDistillery(drink.distillery);
                    });
                this.props.getUser(review.user);
            });
    }

    render() {
        const {drink, review, distillery, user} = this.props;
        
        if (drink && review && distillery && user) {
            const time = getTime(review);
            return (
                <div className='page'>
                    <div className='reviews-bg' />
                    <Navbar />
                    <div className='reviews-show'>
                        <div className='full-review'>
                            <div className='user-box'>
                                <img src={user.photo} id='user-photo' alt='user photo' />
                                <div id='user'>{user.username}</div>
                            </div>
                            <div className='main'>
                                <div className='drink-box'>
                                    <img src={drink.photo} alt='drink photo' id='drink-photo' />
                                    <div className='drink-head'>
                                        <div id='name'>{drink.name}</div>
                                        <div id='dist'>{distillery.name}</div>
                                    </div>
                                </div>
                                <div className='review-box'>
                                    <div id='body'>{review.body}</div>
                                    <div id='rating'>{review.rating} stars</div>
                                    <div className='location-box'>
                                        <strong>Drinking At</strong>
                                        <div id='location'>{review.location}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='review-footer'>
                                <div id='time'>{time}</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (review) {
            return (
                <div className='page'>
                    <Navbar />
                    <div>Review Loading...</div>
                </div>
            );
        } else {
            return (
                <div className='page'>
                    <Navbar />
                    <div>No Review Found</div>
                </div>
            );
        }
    }
}