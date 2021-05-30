import { nodeName } from 'jquery';
import React from 'react';


export default class CreateReviewss extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: '',
            body: '',
            location: '',
            whiskey_id: this.props.drink,
            user_id: this.props.user
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.getWordCount = this.getWordCount.bind(this);
        this.resetState = this.resetState.bind(this);
        this.checkResetState = this.checkResetState.bind(this);
        this.reviewForm = this.reviewForm.bind(this);
        this.getCurrentRating = this.getCurrentRating.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitReview(this.state)
            .then( () => {
                this.resetState()
                this.props.closeCreateModal()
            });
    }

    resetState() {
        this.setState({
            rating: '',
            body: '',
            location: '',
            whiskey_id: this.props.drink,
            user_id: this.props.user
        });
    }

    checkResetState(e) {
        if(e.target.className == 'modal') {
            this.resetState();
            this.props.closeCreateModal();
        }
    }

    getWordCount() {
        return 255 - this.state.body.length
    }

    update(prop) {
        return e => {
            if(prop === 'rating') {
                this.setState({ ['rating'] : parseFloat(e.currentTarget.value) });
            } else {
                this.setState({ [prop] : e.currentTarget.value });
            }
        }
    }

    updateBody(e) {

        return e => {
            if (this.state.body.length < 255 || 
                e.currentTarget.value.length < 
                this.state.body.length){
                this.setState({ ['body'] : e.currentTarget.value });
            }
        }
    }

    getCurrentRating() {
        if(this.state.rating) {
            return (
                <div id='rating-display'>
                    {this.state.rating}<br/>stars
                </div>
            )
        } else {
            return (
                <div id='rating-display'>
                    NO<br/>rating
                </div>
            )
        }
    }

    reviewForm() {
        return (
            <form onSubmit={this.handleSubmit} className='reviews-form' >
                <textarea 
                    id='body' 
                    type='body' 
                    value={this.state.body} 
                    placeholder='What did you think?' 
                    onChange={this.updateBody()} 
                />
                <span id='word-count'>
                    {this.getWordCount()}
                </span>
                <div className='placeholder' />
                <div className='slider-box'>
                    <input 
                        id='rating' 
                        type='range'
                        min='.25' 
                        max='5'
                        step='.25'
                        value={this.state.rating ? this.state.rating : '0.25'}
                        onChange={this.update('rating')}
                    />
                    {this.getCurrentRating()}
                </div>
                <div className='form-bottom'>
                    <input
                        id='location'
                        type='text'
                        value={this.state.location}
                        placeholder='Add A Location'
                        onChange={this.update('location')}
                    />
                    <button type='submit'>Confirm</button>
                </div>
            </form>
        )
    }

    render () {
        const {isCreateOpen} = this.props;
        return (
            <div className={isCreateOpen ? 'open' : 'closed'} onClick={this.checkResetState}>
                <div className='modal'>
                    <div className = 'modal-box'>
                        <div className='title'>
                            <h3>Check-In</h3>
                            <span className='exit-modal' onClick={this.props.closeCreateModal}>
                                <div id='x1'/>
                                <div id='x2'/>
                            </span>
                        </div>
                        <div className='content-box'>
                            {this.reviewForm()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}