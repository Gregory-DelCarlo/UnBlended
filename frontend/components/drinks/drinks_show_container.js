import { connect } from 'react-redux';
import { getDrink } from '../../actions/whiskey_actions';
import DrinksShow from './drinks_show';

const mapStateToProps = (state, ownProps) => {
    return({
        drink: state.entities.whiskeys[ownProps.match.params.drinkId]
    })
};

const mapDispatchToProps = (dispatch, ownProps ) => ({
    requestDrink: () => dispatch(getDrink(ownProps.match.params.drinkId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinksShow);