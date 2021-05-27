import React from 'react';
import NavBar from '../navbar/navbar';
import ReviewsIndexContainer from './reviews_index_container';

export default class AllReviews extends React.Component {
    constructor(props) {
        super(props);
        this.props.getDrinks()
            .then(() => {
                this.props.getDistilleries();
            });
    }

    render() {
        const {drinks, distilleries} = this.props;
        return(
            <div className='page'>
                <NavBar/>
                <ReviewsIndexContainer
                    distilleries={distilleries}
                    drinks={drinks}
                    type='All'
                />
            </div>
        )
    }
}