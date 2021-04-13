import { connect } from 'react-redux';
import DrinkIndex from './drinks_index';
import { getDrinks } from '../../actions/whiskey_actions';
import { getDistilleries } from '../../actions/distillery_actions';

const mapStateToProps = (state) => ({
    drinks: Object.values(state.entities.whiskey),
    distilleries: Object.values(state.entities.distilleries)
});

const mapDispatchToProps = (dispatch) => ({
    getDrinks: () => dispatch(getDrinks()),
    getDistilleries: () => dispatch(getDistilleries())
})



export default connect(mapStateToProps, mapDispatchToProps)(DrinkIndex);