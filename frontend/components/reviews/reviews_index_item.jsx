import React from 'react';
import {Link} from 'react-router-dom';
import {getTime} from '../../util/review_utils';

export default class ReviewsIndexItem extends React.Component {
    constructor(props) {
        super(props);
        
        // this.props.getDrink(this.props.review.whiskey);
        // this.props.getUser(this.props.review.user);
        // this.props.getDistillery(this.props.whiskey.distillery);

        this.handleDelete = this.handleDelete.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
        this.checkDelete = this.checkDelete.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.checkModalClose = this.checkModalClose.bind(this);
        this.checkLocation = this.checkLocation.bind(this);

        this.state = {
            isOpen: false
        }
    }

    openModal() {
        this.setState({isOpen: true});
    }

    closeModal() {
        this.setState({isOpen: false});
    }

    checkModalClose(e) {
        if(e.target.className == 'modal') {
            this.closeModal();
        }
    }

    handleDelete() {
        this.props.deleteReview(this.props.review.id, this.props.currentUser)
            .then(() => {
                if(this.props.type === 'Drink'){
                    this.props.updateReviews(this.props.drink.id);
                }
            });
    }

    confirmDelete() {
        const {isOpen} = this.state;
        
        return (
            <div className={isOpen ? 'open' : 'closed'} onClick={this.checkModalClose}>
                <div className='modal'>
                    <div className='modal-box'>
                        <div className='title'>
                            <h3>Confirm Check-In Deletion</h3>
                            <span className='exit-modal' onClick={this.closeModal}>
                                    <div id='x1'/>
                                    <div id='x2'/>
                            </span>
                        </div>
                        <div className='content-box'>
                            <div id='disclaim'><strong>Warning </strong>
                            - Are you sure you want to delete this check-in? 
                            This cannot be undone.</div>
                            <div id='delete'><button onClick={this.handleDelete}>Confirm Deletion</button></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    checkDelete() {
        const {currentUser, review} = this.props;

        if(currentUser === review.user) {
            return(
                <button id='delete' onClick={this.openModal}>Delete Check-in</button>
            )
        }
    }

    checkLocation() {
        if (this.props.review.location) {
            return (
                <>
                at 
                <span id='location'> {this.props.review.location} </span>
                </>
            )
        };
    }

    render() {
        const {review, drink, user, distillery} = this.props;
        const time = getTime(review);
        return (
            <div className='reviews-index' >
                {this.confirmDelete()}
                <div className='review-head'>
                    <div className='review-title'>
                        <Link to=''>{user.username} </Link>
                        is drinking a
                        <Link to={`/drinks/${drink.id}`}> {drink.name} </Link>
                        by 
                        <span id='distillery'> {distillery.name} </span>
                        {this.checkLocation()}
                    </div>
                    <Link to={`/drinks/${drink.id}`}>
                        <img src={drink.photo} alt='drink img' />
                    </Link>
                </div>
                <div className='review-details'>
                    <div className='review-body'>{review.body}</div>
                    <div>rating: {review.rating} stars</div>
                </div>
                <div className='review-footer'>
                    {time}
                    <Link to={`/reviews/${review.id}`} id='detailed'>View Detailed Check-In</Link>
                    {this.checkDelete()}
                </div>
            </div>
        )
    }
}