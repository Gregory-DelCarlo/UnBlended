import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import ReviewsIndexContainer from '../reviews/reviews_index_container';
import CreateReviewsContainer from '../reviews/create_reviews_container';

export default class DrinksShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCreateOpen: false,
            isDeleteOpen: false,
            readMore: false
        }

        this.getDrinkId = this.getDrinkId.bind(this);
        this.openCreateModal = this.openCreateModal.bind(this);
        this.closeCreateModal = this.closeCreateModal.bind(this);
        this.openDeleteModal = this.openDeleteModal.bind(this);
        this.closeDeleteModal = this.closeDeleteModal.bind(this);
        this.checkDeleteModalClose = this.checkDeleteModalClose.bind(this);
        this.toggleDescLength = this.toggleDescLength.bind(this);
        this.confirmDrinkDelete = this.confirmDrinkDelete.bind(this);
        this.handleDrinkDelete = this.handleDrinkDelete.bind(this);
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

    openDeleteModal() {
        this.setState({isDeleteOpen: true});
    }

    closeDeleteModal() {
        this.setState({isDeleteOpen: false});
    }

    checkDeleteModalClose(e) {
        if(e.target.className == 'modal') {
            this.closeDeleteModal();
        }
    }

    openCreateModal() {
        this.setState({isCreateOpen: true});
    }

    closeCreateModal() {
        this.setState({isCreateOpen: false});
        this.props.getRating(this.props.drink.id);
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

    handleDrinkDelete() {
        this.props.deleteDrink()
            .then(() => {
                this.props.history.push('/drinks/');
            })
    }

    confirmDrinkDelete() {
        const {isDeleteOpen} = this.state;
        
        return (
            <div className={isDeleteOpen ? 'open' : 'closed'} onClick={this.checkDeleteModalClose}>
                <div className='modal'>
                    <div className='modal-box'>
                        <div className='title'>
                            <h3>Confirm Drink Deletion</h3>
                            <span className='exit-modal' onClick={this.closeDeleteModal}>
                                    <div id='x1'/>
                                    <div id='x2'/>
                            </span>
                        </div>
                        <div className='content-box'>
                            <div id='disclaim'><strong>Warning </strong>
                            - Are you sure you want to delete this Drink? 
                            This cannot be undone.</div>
                            <div id='delete'><button onClick={this.handleDrinkDelete}>Confirm Deletion</button></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { drink, distillery, rating } = this.props;
        const { isCreateOpen, readMore } = this.state;
        if (drink) {
            return(
                <div className='page'>
                    <Navbar />
                    <CreateReviewsContainer isCreateOpen={isCreateOpen} closeCreateModal={this.closeCreateModal} drink={drink.id}/>
                    {this.confirmDrinkDelete()}
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
                                    <button id='check-in' onClick={this.openCreateModal} >
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
                            <button className='button' onClick={this.openDeleteModal}>Delete Drink</button>
                        </div>
                    </div>
                    <ReviewsIndexContainer 
                        id={this.getDrinkId}
                        distillery={distillery}
                        drink={drink}
                        updateReviews={this.props.getRating}
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