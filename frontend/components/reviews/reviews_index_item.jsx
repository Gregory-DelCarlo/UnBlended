import React from 'react';
import {Link} from 'react-router-dom';

export default class ReviewsIndexItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.props.getDrink(this.props.review.whiskey);
        this.props.getUser(this.props.review.user);
        this.props.getDistillery(this.props.whiskey.distillery);

        this.handleDelete = this.handleDelete.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
        this.checkDelete = this.checkDelete.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.checkModalClose = this.checkModalClose.bind(this);

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
    }

    confirmDelete() {
        const {isOpen} = this.state;
        
        return (
            <div className={isOpen ? 'open' : 'closed'} onClick={this.checkModalClose}>
                <div className='modal'>
                    <div className='modal-delete-box'>
                        <div id='title'>Confirm Check-In Deletion</div>
                        <div id='disclaim'><span>Warning </span>
                        - Are you sure you want to delete this check-in? 
                        This cannot be undone.</div>
                        <div id='delete'><button onClick={this.handleDelete}>Confirm Deletion</button></div>
                    </div>
                </div>
            </div>
        )
    }

    checkDelete() {
        const {currentUser, review} = this.props;

        if(currentUser === review.user) {
            return(
                <span id='delete'> <button onClick={this.openModal}>Delete Check-in</button> </span>
            )
        }
    }

    render() {
        const {review, whiskey, user, distillery} = this.props;
        return (
            <div className='reviews-index' >
                {this.confirmDelete()}
                <div className='review-head'>
                    <div className='review-title'>
                        <Link to=''>{user.username} </Link>
                        is drinking a
                        <Link to={`/drinks/${whiskey.id}`}> {whiskey.name} </Link>
                        by 
                        <span id='distillery'> {distillery.name} </span>
                        at 
                        <span id='location'> {review.location} </span>
                    </div>
                    <Link to={`/drinks/${whiskey.id}`}>
                        <img src={whiskey.photo} alt='whiskey img' />
                    </Link>
                </div>
                <div className='review-details'>
                    <div className='review-body'>{review.body}</div>
                    <div>rating: {review.rating} stars</div>
                </div>
                <div className='review-footer'>
                    <span id='detailed'>View Detailed Check-In</span>
                    {this.checkDelete()}
                </div>
            </div>
        )
    }
}