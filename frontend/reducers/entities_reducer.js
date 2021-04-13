import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import whiskeysReducer from './whiskeys_reducer';
import distilleriesReducer from './distilleries_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    whiskey: whiskeysReducer,
    distilleries: distilleriesReducer 
});

export default entitiesReducer;