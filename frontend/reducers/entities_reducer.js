import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import whiskeysReducer from './whiskeys_reducer';
import distilleriesReducer from './distilleries_reducer';
import reviewsReducer from './reviews_reducer';
import ratingsReducer from './ratings_reducer';
import friendsReducer from './friends_reducer';
import commentsReducer from './comments_reducer';
import cheersReducer from './cheers_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    friends: friendsReducer,
    whiskey: whiskeysReducer,
    distilleries: distilleriesReducer,
    ratings: ratingsReducer,
    reviews: reviewsReducer,
    comments: commentsReducer,
    cheers: cheersReducer
});

export default entitiesReducer;