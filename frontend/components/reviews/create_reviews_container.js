import { connect } from 'react-redux';
import CreateReviews from './create_reviews';
import {newReview} from '../../actions/review_actions';

const mapStateToProps = state => ({
    user: state.session.id
});

const mapDispatchToProps = dispatch => ({
    submitReview: review => dispatch(newReview(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateReviews);