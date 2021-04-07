import { connect } from 'react-redux';
import DrinkSearch from './drink_search';
import { getDrinks } from '../../actions/whiskey_actions';

const mapStateToProps = (state) => ({
    drinks: Object.values(state.entities.whiskeys)
});

const mapDispatchToProps = (dispatch) => ({
    getDrinks: () => dispatch(getDrinks())
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinkSearch)