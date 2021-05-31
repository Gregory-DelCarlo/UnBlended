import { connect } from 'react-redux';
import { getDistillery } from '../../actions/distillery_actions';
import { getDrink } from '../../actions/whiskey_actions';
import { getUser } from '../../actions/user_actions';
import { getReview, destroyReview } from '../../actions/review_actions';
import ReviewsShow from './reviews_show';

// we will need currentuser to check for friendships

const mapStateToProps = (state, ownProps) => {
    const review = state.entities.reviews[ownProps.match.params.reviewId];
    const drink = state.entities.whiskey[review.whiskey];
    if(review && drink) {
        return({
            review,
            drink,
            distillery: state.entities.distilleries[drink.distillery],
            user: state.entities.users[review.user]
        });
    } else if(review){
        return ({
            review
        });
    } else {
        return {};
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    getDrink: id => dispatch(getDrink(id)),
    getReview: () => dispatch(getReview(ownProps.match.params.reviewId)),
    getUser: id => dispatch(getUser(id)),
    getDistillery: id => dispatch(getDistillery(id)),
    deleteReview: () => dispatch(destroyReview(ownProps.match.params.reviewId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsShow);