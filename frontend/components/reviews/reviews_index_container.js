import { connect } from 'react-redux';
import ReviewsIndex from './reviews_index';
import { getReviews, getSingleRating } from '../../actions/review_actions';
import { getUsers } from '../../actions/user_actions';

// need to set up mapping to users so we can properly display reviews
const mapStateToProps = (state) => {
    const {reviews, users} = state.entities;
    if(Object.keys(reviews).length !== 0 && Object.keys(users).length !== 0) {
        return({
            reviews: state.entities.reviews,
            users: state.entities.users
        });
    } else {
        return {};
    }
};

const mapDispatchToProps = (dispatch) => ({
    getReviews: (type, id) => dispatch(getReviews(type, id)),
    getUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsIndex);


