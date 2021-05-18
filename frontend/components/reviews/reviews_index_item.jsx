import React from 'react';
import {Link} from 'react-router-dom';

export default class ReviewsIndexItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.props.getDrink(this.props.review.whiskey);
        this.props.getUser(this.props.review.user);
        this.props.getDistillery(this.props.whiskey.distillery);
    }

    render() {
        const {review, whiskey, user, distillery} = this.props;
        return (
            <div className='reviews-index' >
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
            </div>
        )
    }
}