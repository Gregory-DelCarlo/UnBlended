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

        this.props.requestDrink();
        if (this.props.drink) {
            this.props.getDistillery(this.props.drink.distillery);
        }

        this.getDrinkId = this.getDrinkId.bind(this);
        this.checkModalClose = this.checkModalClose.bind(this);
        this.openModal = this.openModal.bind(this);
        this.toggleDescLength = this.toggleDescLength.bind(this);
    }

    getDrinkId() {
        let url = this.props.history.location.pathname;
        return url.split('/')[2];
    }

    openModal() {
        this.setState({isOpen: true});
    }

    checkModalClose(e) {
        if (e.target.className == 'modal') {
            this.setState({isOpen: false});
        }
    }

    toggleDescLength() {
        let descButton = document.getElementById('desc-button');

        if(this.state.readMore) {
            this.setState({readMore: false});
            descButton.innerHTML = 'Read Less';
        } else {
            this.setState({readMore: true});
            descButton.innerHTML = 'Read More';
        }
    }

    render() {
        const { drink, distillery } = this.props;
        const { isOpen, readMore } = this.state;
        if (drink ) {
            return(
                <div className='page'>
                    <Navbar />
                    <CreateReviewsContainer isOpen={isOpen} checkModalClose={this.checkModalClose}/>
                    <div className='drinks-show'>
                        <div className='full-drink'>
                            <div id='top'>
                                <img src={drink.photo}></img>
                                <div>
                                    <p id='name'>{drink.name}</p><br/>
                                    <p id='distillery'>{distillery.name} </p><br/>
                                    {/* add when distillery api is set up  */}
                                    <p>{drink.type}</p>
                                </div>
                            </div>
                            <div id='info'>
                                <p>{drink.abv}% ABV</p>
                                <p>{drink.proof} Proof</p>
                                <p>rating %</p>
                                <p> total ratings </p>
                            </div>
                            <div id='bottom'>
                                <div id='description'>
                                    <span>{drink.description.slice(0, 83)}</span>
                                    <span className={readMore ? 'more' : 'less'}>{drink.description.slice(83)}</span>
                                    <button id='desc-button' onClick={this.toggleDescLength} > Read More</button>
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
                    <ReviewsIndexContainer id={this.getDrinkId}/>
                </div>
            )
        }

        return (<div className='page'>
            Drink loading ...
        </div>)
    }
}