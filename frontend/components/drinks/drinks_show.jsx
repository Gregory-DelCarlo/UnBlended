import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import ReviewsIndexContainer from '../reviews/reviews_index_container';
import CreateReviewsContainer from '../reviews/create_reviews_container';

export default class DrinksShow extends React.Component {
    constructor(props) {
        super(props);
        this.props.requestDrink();
        if (this.props.drink) {
            this.props.getDistillery(this.props.drink.distillery);
        }

        this.getDrinkId = this.getDrinkId.bind(this);

        this.checkModalClose = this.checkModalClose.bind(this);
        this.openModal = this.openModal.bind(this);

        this.checkModalClose();
    }

    getDrinkId() {
        let url = this.props.history.location.pathname;
        return url.split('/')[2];
    }

    checkModalClose() {
        window.onclick = function(event) {
            if (event.target.className == 'modal') {
              event.target.removeClass('open');
            }
        };
    }

    openModal() {
        modal = document.getElementsByClassName('modal');
        debugger
        if (modal) {
            modal.addClass('open');
        }
    }

    render() {
        const { drink, distillery } = this.props;
        if (drink ) {
            return(
                <div className='page'>
                    <Navbar />
                    <CreateReviewsContainer />
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
                            <div id='description'>{drink.description}</div>
                            <div className = 'user-drink-options'>
                                <button id='check-in' onClick={this.openModal} />
                            </div>
                        </div>
                        <br />
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