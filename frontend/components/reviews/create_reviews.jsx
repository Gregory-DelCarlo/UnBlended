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
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.submitReview(this.state)
            .then( () => this.props.closeModal());
    }

    getWordCount() {
        return 255 - this.state.body.length
    }

    update(prop) {
        return e => {
            if(prop = 'body') {
                if (this.state.body.length < 255 || e.currentTarget.value.length < this.state.body.length) {
                    this.setState({ [prop] : e.currentTarget.value });
                }
            } else {
                this.setState({ [prop] : e.currentTarget.value });
            }
        }
    }

    render () {
        const {isOpen} = this.props;
        return (
            <div className={isOpen ? 'open' : 'closed'} onClick={this.props.checkModalClose}>
                <div className='modal'>
                    <div className = 'modal-box'>
                        <div className='reviews-box'>
                            <div className='title'>
                                <h3>Check-In</h3>
                            </div>
                            <form onSubmit={this.handleSubmit} className='reviews-form' >
                                <textarea id='body' type='body' value={this.state.body} placeholder='What did you think?' onChange={this.update('body')} />
                                <span id='word-count'>
                                    {this.getWordCount()}
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}