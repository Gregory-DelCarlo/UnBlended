import React from 'react';
import Navbar from '../navbar/navbar';
import { getTime } from '../../util/review_utils';

export default class ReviewsShow extends React.Component {
    constructor(props) {
        super(props);

        this.renderReview = this.renderReview.bind(this);
        this.renderLoad = this.renderLoad.bind(this);
        this.handleCheers = this.handleCheers.bind(this);

        this.state = {
            didCheer: false
        }
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
                this.props.getCheers(review.id)
                    .then(() => {
                        if (this.props.cheers.includes(this.props.currentUser)) {
                            this.setState({didCheer: true});
                        }
                    });
            });
    }

    handleCheers() {
        const {review, currentUser} = this.props;
        this.props.toggleCheers(review.id, currentUser);
        this.setState({didCheer: !this.state.didCheer});
    }

    showCheers() {
        const {cheers} = this.props;

        if (cheers && cheers.length > 0) {
            return (
                <div className='cheers'>
                    <div className='cheers-total'>{cheers.length}</div>
                </div>
            )
        } else {
            return (
                <div className='no-cheers'>Go ahead, Toast this!</div>
            )
        }
    }

    renderReview() {
        const {drink, review, distillery, user} = this.props;
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
                    <div className='cheers-box'>
                        <button 
                            onClick={this.handleCheers} 
                            className={this.state.didCheer ? 'cheered' : 'uncheered'}
                        >Toast</button>
                        {this.showCheers()}
                    </div>
                </div>
            </div>
        );
    }

    renderLoad() {
        if (this.props.review) {
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

    render() {
        const {drink, review, distillery, user} = this.props;
        
        if (drink && review && distillery && user) {
            return this.renderReview();
        } else {
            return this.renderLoad();
        }
    }
}