import { connect } from 'react-redux';
import { newDrink } from '../../actions/whiskey_actions';
import DrinkForm from './drink_form';


const mapStateToProps = (state) => ({
    drink: {
        name: '',
        type: '',
        abv: 0,
        proof: 0,
        description: '',
        distillery_id: 0
    },
    formType: 'Create Drink'
});

const mapDispatchToProps = (dispatch) => ({
    submitDrink: drink => dispatch(newDrink(drink))
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinkForm);
