import { connect } from 'react-redux';
import { newDrink } from '../../actions/whiskey_actions';
import DrinkForm from './drink_form';


const mapStateToProps = (state) => ({
    drink: {
        name: '',
        type: 'Rye',
        abv: 80,
        proof: 160,
        description: '',
        distillery_id: 1
    },
    formType: 'Create Drink'
});

const mapDispatchToProps = (dispatch) => ({
    submitDrink: drink => dispatch(newDrink(drink))
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinkForm);
