import { 
    fetchDrinks, fetchDrink, createDrink, updateDrink, deleteDrink
} from '../util/whiskey_utils';

//----------------------ACTION CONSTANTS--------------------
// use these in your reducer to ensure correct case is found


export const RECEIVE_DRINKS = 'RECEIVE_DRINKS';
export const RECEIVE_DRINK = 'RECEIVE_DRINK';
export const REMOVE_DRINK = 'REMOVE_DRINK';



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

const removeDrink = drinkId => ({
    type: REMOVE_DRINK,
    drinkId
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

export const newDrink = drink => dispatch => (
    createDrink(drink)
        .then(drink => dispatch(receiveDrink(drink)))
);

export const editDrink = drink => dispatch => (
    updateDrink(drink)
        .then(drink => dispatch(receiveDrink(drink)))
);

export const destroyDrink = drinkId => dispatch => (
    deleteDrink(drinkId) 
        .then(drink => dispatch(removeDrink(drink.id)))
)