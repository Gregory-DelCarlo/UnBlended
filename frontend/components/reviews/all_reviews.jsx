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
        const {drinks, distilleries, currentUser} = this.props;
        const path = this.props.location.pathname;
        if (path === '/thepub') {
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
        } else if (path === '/home') {
            if (drinks, distilleries, currentUser){
            return(
                <div className='page'>
                    <NavBar/>
                    <ReviewsIndexContainer
                        distilleries={distilleries}
                        drinks={drinks}
                        type='Friends'
                        id={currentUser}
                    />
                </div>
            )
            } else {
                return(
                    <div className='page'>
                        <NavBar/>
                        <h1>Loading page...</h1>
                    </div>
                )
            }
        }
    }
}