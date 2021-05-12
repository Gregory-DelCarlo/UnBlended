import { connect } from 'react-redux';
import reviewsIndex from './reviews_index';
import { getReviews, destroyReview } from '../../actions/review_actions';

// need to set up mapping to users so we can properly display reviews
const mapStateToProps = (state) => ({
    reviews: state.entities.reviews,
});

const mapDispatchToProps = (dispatch) => ({
    getReviews: (id) => dispatch(getReviews('Drink', id)),
    destroyReview: (reviewId, userId) => dispatch(destroyReview(reviewId, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(reviewsIndex);


