import { connect } from 'react-redux';
import { getDrink, destroyDrink } from '../../actions/whiskey_actions';
import DrinksShow from './drinks_show';

const mapStateToProps = (state, ownProps) => {
    return({
        drink: state.entities.whiskey[ownProps.match.params.drinkId]
    })
};

const mapDispatchToProps = (dispatch, ownProps ) => ({
    requestDrink: () => dispatch(getDrink(ownProps.match.params.drinkId)),
    deleteDrink: () => dispatch(destroyDrink(ownProps.match.params.drinkId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinksShow);