import { connect } from 'react-redux';
import { newDrink } from '../../actions/whiskey_actions';
import DrinkForm from './drink_form';
import { getDistilleries } from '../../actions/distillery_actions';


const mapStateToProps = (state) => ({
    formType: 'Create Drink',
    distilleries: Object.values(state.entities.distilleries)
});

const mapDispatchToProps = (dispatch) => ({
    submitDrink: drink => dispatch(newDrink(drink)),
    getDistilleries: distilleries => dispatch(getDistilleries(distilleries))
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinkForm);
