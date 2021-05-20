import { connect } from 'react-redux';
import DrinksIndex from './drinks_index';
import { getDrinks } from '../../actions/whiskey_actions';
import { getDistilleries } from '../../actions/distillery_actions';

const mapStateToProps = (state) => ({
    drinks: state.entities.whiskey,
    distilleries: state.entities.distilleries
});

const mapDispatchToProps = (dispatch) => ({
    getDrinks: () => dispatch(getDrinks()),
    getDistilleries: () => dispatch(getDistilleries())
})



export default connect(mapStateToProps, mapDispatchToProps)(DrinksIndex);