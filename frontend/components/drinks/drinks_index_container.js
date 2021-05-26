import { connect } from 'react-redux';
import DrinksIndex from './drinks_index';
import { getDrinks } from '../../actions/whiskey_actions';
import { getDistilleries } from '../../actions/distillery_actions';

const mapStateToProps = (state) => ({
    drinks: Object.values(state.entities.whiskey).length !== 0 ? state.entities.whiskey : null,
    distilleries: Object.values(state.entities.distilleries).length !== 0 ? state.entities.distilleries : null
});

const mapDispatchToProps = (dispatch) => ({
    getDrinks: () => dispatch(getDrinks()),
    getDistilleries: () => dispatch(getDistilleries())
})



export default connect(mapStateToProps, mapDispatchToProps)(DrinksIndex);