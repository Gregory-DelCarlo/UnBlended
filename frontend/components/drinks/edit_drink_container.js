import React from 'react';
import { connect } from 'react-redux';
import { getDrink, editDrink } from '../../actions/whiskey_actions';
import { getDistilleries } from '../../actions/distillery_actions';
import DrinkForm from './drink_form';

const mapStateToProps = (state, ownProps) => ({
  drink: state.entities.whiskey[ownProps.match.params.drinkId],
  formType: 'Update Drink',
  distilleries: Object.values(state.entities.distilleries)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  submitDrink: drink => dispatch(editDrink(drink)),
  getDrink: () => dispatch(getDrink(ownProps.match.params.drinkId)),
  getDistilleries: distilleries => dispatch(getDistilleries(distilleries))
});


class EditDrinkForm extends React.Component {
  
  componentDidMount() {
    this.props.getDrink();
  }

  render () {
    const { drink, formType, submitDrink, distilleries, getDistilleries } = this.props;

    if (!drink) return null;
    return (
      <DrinkForm
      drink={drink}
      formType={formType}
      submitDrink={submitDrink} 
      distilleries={distilleries}
      getDistilleries={getDistilleries}/>
      );
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(EditDrinkForm);