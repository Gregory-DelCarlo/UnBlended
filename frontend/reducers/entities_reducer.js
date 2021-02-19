import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import whiskeysReducer from './whiskeys_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    whiskeys: whiskeysReducer
});

export default entitiesReducer;