import { connect } from 'react-redux';
import { getDistillery } from '../../actions/distillery_actions';
import { getDrink, destroyDrink } from '../../actions/whiskey_actions';
import { getSingleRating } from '../../actions/review_actions'
import DrinksShow from './drinks_show';

const mapStateToProps = (state, ownProps) => {
    getDrink(ownProps.match.params.drinkId);
    const drink = state.entities.whiskey[ownProps.match.params.drinkId];
    if (drink) {
        return({
            drink,
            distillery: state.entities.distilleries[drink.distillery] ? state.entities.distilleries[drink.distillery] : '',
            rating: state.entities.ratings[drink.id] ? state.entities.ratings[drink.id] : ''
        })
    } else {
        return {}
    }
};

const mapDispatchToProps = (dispatch, ownProps ) => ({
    requestDrink: () => dispatch(getDrink(ownProps.match.params.drinkId)),
    deleteDrink: () => dispatch(destroyDrink(ownProps.match.params.drinkId)),
    getDistillery: distId => dispatch(getDistillery(distId)),
    getRating: id => dispatch(getSingleRating(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinksShow);