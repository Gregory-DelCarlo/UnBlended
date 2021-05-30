import React from 'react';
import {Link} from 'react-router-dom';

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
        this.getTime = this.getTime.bind(this);
        this.checkS = this.checkS.bind(this);
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

    getTime() {
        const { review } = this.props;

        const months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ]

        let rFullDate = review.time.split('T');

        let rDate = rFullDate[0].split('-');
        let rTime = rFullDate[1].split(':');
        let reviewDate = new Date(
            `${rDate[0]} ${rDate[1]} ${rDate[2]}, ${rTime[0]}:${rTime[1]}:${rTime[2].slice(0,-1)} UTC`
        ).toString().split(' ');
        let currentDate = new Date().toString().split(' ');
        // date format
        // ["Tue", "May", "18", "2021", "22:37:22", "GMT-0700", "(Pacific", "Daylight", "Time)"]

        if (currentDate[1] === reviewDate[1]) {
            if (currentDate[2] === reviewDate[2]){
                let cTimeStamp = currentDate[4].split(':');
                let cHours = cTimeStamp[0];
                
                let rTimeStamp = reviewDate[4].split(':');
                let rHours = rTimeStamp[0];
                if(cHours === rHours) {
                    let cMin = cTimeStamp[1];
                    let rMin = rTimeStamp[1];
                    if(cMin === rMin) {
                        return (
                            <span id='time'>seconds ago</span>
                        )
                    } else if (cMin !== rMin) {
                        let minDiff = cMin - rMin
                        return (
                            <span id='time'>{minDiff} minute{this.checkS(minDiff)} ago</span>
                        )
                    }
                } else if (cHours !== rHours) {
                    let hrDiff = cHours - rHours;
                    return (
                        <span id='time'>{hrDiff} hour{this.checkS(hrDiff)} ago</span>
                    )
                }
            } else if (currentDate[2] !== reviewDate[2]) {
                let dayDiff = currentDate[2] - reviewDate[2];
                return (
                    <span id='time'>{dayDiff} day{this.checkS(dayDiff)} ago</span>
                )
            }
        } else if (currentDate[1] !== reviewDate[1] && 
                    currentDate[3] === reviewDate[3]) {
            let mnthDiff = (months.indexOf(currentDate[1]) + 1) - 
                            (months.indexOf(reviewDate[1]) + 1);
            return (
                <span id='time'>{mnthDiff} month{this.checkS(mnthDiff)} ago</span>
            )
        } else if (currentDate[1] !== reviewDate[1] && 
                    currentDate[3] !== reviewDate[3]) {
            let yrDiff = currentDate[3] - reviewDate[3];
            return (
                <span id='time'>{yrDiff} year{this.checkS(yrDiff)} ago</span>
            )
        }

    }

    checkS(diff) {
        if(diff > 1) {
            return <span id='plural'>s</span>
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
                    {this.getTime()}
                    <span id='detailed'>View Detailed Check-In</span>
                    {this.checkDelete()}
                </div>
            </div>
        )
    }
}