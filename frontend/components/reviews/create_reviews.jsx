import { nodeName } from 'jquery';
import React from 'react';


export default class CreateReviewss extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const {isOpen} = this.props;
        return (
            <div className={isOpen ? 'open' : 'closed'} onClick={this.props.checkModalClose}>
                <div className='modal'>
                    <div className = 'modal-box'>
                        Create a Review
                    </div>
                </div>
            </div>
        )
    }
}