import { 
    fetchDrinks, fetchDrink
} from '../util/whiskey_utils';

//----------------------ACTION CONSTANTS--------------------
// use these in your reducer to ensure correct case is found


export const RECEIVE_DRINKS = 'RECEIVE_DRINKS';
export const RECEIVE_DRINK = 'RECEIVE_DRINK';



//-----------------------ACTION CREATORS---------------------
// these get sent to your reducer by your action thunk creators to update state


const receiveDrinks = drinks => ({
        type: RECEIVE_DRINKS,
        drinks
});

const receiveDrink = drink => ({
    type: RECEIVE_DRINK,
    drink
});




//----------------------ACTION THUNK CREATORS-----------------
// add these to component containers to get information from the backend into state

export const getDrinks = () => dispatch => (
    fetchDrinks()
        .then(drinks => dispatch(receiveDrinks(drinks)))
);

export const getDrink = drinkId => dispatch => (
    fetchDrink(drinkId)
        .then(drink => dispatch(receiveDrink(drink)))
);