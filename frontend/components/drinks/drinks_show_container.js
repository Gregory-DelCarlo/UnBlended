import { connect } from 'react-redux';
import { getDistillery } from '../../actions/distillery_actions';
import { getDrink, destroyDrink } from '../../actions/whiskey_actions';
import DrinksShow from './drinks_show';

const mapStateToProps = (state, ownProps) => {
    const drink = state.entities.whiskey[ownProps.match.params.drinkId];
    return({
        drink,
        distillery: state.entities.distilleries
    })
};

const mapDispatchToProps = (dispatch, ownProps ) => ({
    requestDrink: () => dispatch(getDrink(ownProps.match.params.drinkId)),
    deleteDrink: () => dispatch(destroyDrink(ownProps.match.params.drinkId)),
    getDistillery: distId => dispatch(getDistillery(distId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinksShow);