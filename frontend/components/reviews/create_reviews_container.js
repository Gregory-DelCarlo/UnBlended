import { connect } from 'react-redux';
import CreateReviews from './create_reviews';
import {newReview} from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => ({
    user: state.session.id,
    isOpen: ownProps.isOpen,
    drink: ownProps.drink,
    user: state.session.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    submitReview: review => dispatch(newReview(review))

})

export default connect(mapStateToProps, mapDispatchToProps)(CreateReviews);