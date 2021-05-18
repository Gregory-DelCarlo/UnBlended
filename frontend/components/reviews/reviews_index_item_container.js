import { connect } from 'react-redux';
import reviewsIndexItem from './reviews_index_item';
import { getDrink } from '../../actions/whiskey_actions';
import { getUser } from '../../actions/user_actions';
import { getDistillery } from '../../actions/distillery_actions';
import { destroyReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {{
    const whiskey = state.entities.whiskey[ownProps.review.whiskey];
    return ({
        whiskey:  whiskey ? whiskey : '',
        distillery: state.entities.distilleries[whiskey.distillery] ? state.entities.distilleries[whiskey.distillery] : '',
        user: state.entities.users[ownProps.review.user] ? state.entities.users[ownProps.review.user] : '',
        currentUser: state.session.id
    });
}};

const mapDispatchToProps = dispatch => ({
    getDrink: drinkId => dispatch(getDrink(drinkId)),
    getUser: userId => dispatch(getUser(userId)),
    getDistillery: distId => dispatch(getDistillery(distId)),
    deleteReview: (reviewId, userId) => dispatch(destroyReview(reviewId, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(reviewsIndexItem);