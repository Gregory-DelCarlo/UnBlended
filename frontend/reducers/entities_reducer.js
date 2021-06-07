import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import whiskeysReducer from './whiskeys_reducer';
import distilleriesReducer from './distilleries_reducer';
import reviewsReducer from './reviews_reducer';
import ratingsReducer from './ratings_reducer';
import friendsReducer from './friends_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    whiskey: whiskeysReducer,
    distilleries: distilleriesReducer,
    reviews: reviewsReducer,
    ratings: ratingsReducer,
    friends: friendsReducer
});

export default entitiesReducer;