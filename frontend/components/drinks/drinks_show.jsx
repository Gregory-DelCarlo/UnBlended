import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import ReviewsIndexContainer from '../reviews/reviews_index_container';
import CreateReviewsContainer from '../reviews/create_reviews_container';

export default class DrinksShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            readMore: false
        }

        this.getDrinkId = this.getDrinkId.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.toggleDescLength = this.toggleDescLength.bind(this);
        // this.getRatingAverage = this.getRatingAverage.bind(this);
    }

    componentDidMount() {
        this.props.requestDrink()
            .then(() => {
                this.props.getDistillery(this.props.drink.distillery);
                this.props.getRating(this.props.drink.id);
            })
    }

    getDrinkId() {
        let url = this.props.history.location.pathname;
        return url.split('/')[2];
    }

    openModal() {
        this.setState({isOpen: true});
    }

    closeModal() {
        this.setState({isOpen: false});
        this.props.getRatings(this.props.drink.id);
    }

    toggleDescLength() {
        let descButton = document.getElementById('desc-button');

        if(this.state.readMore) {
            this.setState({readMore: false});
            descButton.innerHTML = 'Show More';
        } else {
            this.setState({readMore: true});
            descButton.innerHTML = 'Show Less';
        }
    }

    // getRatingAverage() {
    //     if(this.props.ratings.length !== 0){
    //         let sum = this.props.ratings.reduce((a,b) => (a + b), 0);
    //         let avg = sum / this.props.ratings.length;
    
    //         return avg.toFixed(2);
    //     } else {
    //         return 0;
    //     }
    // }

    render() {
        const { drink, distillery, rating } = this.props;
        const { isOpen, readMore } = this.state;
        if (drink) {
            return(
                <div className='page'>
                    <Navbar />
                    <CreateReviewsContainer isOpen={isOpen} closeModal={this.closeModal} drink={drink.id}/>
                    <div className='drinks-show'>
                        <div className='full-drink'>
                            <div id='top'>
                                <img src={drink.photo}></img>
                                <div>
                                    <p id='name'>{drink.name}</p><br/>
                                    <p id='distillery'>{distillery.name} </p><br/>
                                    <p>{drink.type}</p>
                                </div>
                            </div>
                            <div id='info'>
                                <p>{drink.abv}% ABV</p>
                                <p>{drink.proof} Proof</p>
                                <p>{rating.avg} stars</p>
                                <p>{rating.total} ratings</p>
                            </div>
                            <div id='bottom'>
                                <div id='description'>
                                    <span>{drink.description.slice(0, 83)}</span>
                                    <span className={readMore ? 'more' : 'less'}>{drink.description.slice(83)}</span>
                                    <button id='desc-button' onClick={this.toggleDescLength} >Show More</button>
                                </div>
                                <div className = 'user-drink-options'>
                                    <button id='check-in' onClick={this.openModal} >
                                        <span id="checkmark">
                                            <div id="checkmark_stem"></div>
                                            <div id="checkmark_kick"></div>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div><br />
                        <div className='sidebar'>
                            <Link to={`/drinks/${drink.id}/edit`} >Edit Drink</Link><br/>
                            <button className='button' onClick={this.props.deleteDrink}>Delete Drink</button>
                        </div>
                    </div>
                    <ReviewsIndexContainer 
                        id={this.getDrinkId}
                        distillery={distillery}
                        drink={drink}
                        updateReviews={this.props.getRatings}
                        type='Drink'
                    />
                </div>
            )
        }

        return (<div className='page'>
            Drink loading ...
        </div>)
    }
}