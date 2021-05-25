import { connect } from 'react-redux';
import ReviewsIndex from './reviews_index';
import { getReviews, destroyReview } from '../../actions/review_actions';
import { getUsers } from '../../actions/user_actions';

// need to set up mapping to users so we can properly display reviews
const mapStateToProps = (state) => ({
    reviews: state.entities.reviews,
    users: state.entities.users
});

const mapDispatchToProps = (dispatch) => ({
    getReviews: (id) => dispatch(getReviews('Drink', id)),
    getUsers: () => dispatch(getUsers()),
    destroyReview: (reviewId, userId) => dispatch(destroyReview(reviewId, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsIndex);


