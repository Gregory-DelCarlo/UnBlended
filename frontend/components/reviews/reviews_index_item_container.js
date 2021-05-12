import { connect } from 'react-redux';
import reviewsIndexItem from './reviews_index_item';
import { getDrink } from '../../actions/whiskey_actions';
import { getUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
    review: ownProps.review,
    whiskey: state.entities.whiskey[ownProps.review.whiskey] ? state.entities.whiskey[ownProps.review.whiskey] : '',
    user: state.entities.users[ownProps.review.user] ? state.entities.users[ownProps.review.user] : ''
});

const mapDispatchToProps = dispatch => ({
    getDrink: drinkId => dispatch(getDrink(drinkId)),
    getUser: userId => dispatch(getUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(reviewsIndexItem);