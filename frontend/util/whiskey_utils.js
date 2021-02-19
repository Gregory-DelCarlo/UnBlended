//utils are the backend calls to your database. 
//They will eventually be used in your action thunk creators
//the data they return is used as the payload of a certain action to update state

// what calls to the backend??
// index, show, create, update, delete


export const fetchDrinks = () => (
    $.ajax({
        url: '/api/whiskeys',
        method: 'GET'
    })
);

export const fetchDrink = drinkId => (
    $.ajax({
        url: `/api/whiskeys/${drinkId}`,
        method: 'GET'
    })
);