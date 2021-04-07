import { connect } from 'react-redux';
import DrinkIndex from './drinks_index';
import { getDrinks } from '../../actions/whiskey_actions';

const mapStateToProps = (state) => ({
    drinks: Object.values(state.entities.whiskey)
});

const mapDispatchToProps = (dispatch) => ({
    getDrinks: () => dispatch(getDrinks())
})



export default connect(mapStateToProps, mapDispatchToProps)(DrinkIndex);