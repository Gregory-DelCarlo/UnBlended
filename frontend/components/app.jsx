import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import SignInContainer from './auth/login_container';
import SignUpContainer from './auth/signup_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import DrinksIndexContainer from './drinks/drinks_index_container';
import DrinksShowContainer from './drinks/drinks_show_container';
import CreateDrinkContainer from './drinks/create_drink_container';
import EditDrinkContainer from './drinks/edit_drink_container';
import AllReviewsContainer from './reviews/all_reviews_container';
import ReviewsShowContainer from './reviews/reviews_show_container';

const App = () => (
    <>
    <Switch>
        <Route exact path="/" component={HeaderContainer} />
        <AuthRoute path='/login' component={SignInContainer} />
        <AuthRoute path='/signup' component={SignUpContainer} />
        <ProtectedRoute exact path='/drinks/new' component={CreateDrinkContainer} />
        <ProtectedRoute exact path='/drinks/:drinkId/edit' component={EditDrinkContainer} />
        <ProtectedRoute exact path='/drinks' component={DrinksIndexContainer} />
        <ProtectedRoute exact path='/drinks/:drinkId' component={DrinksShowContainer} />
        <ProtectedRoute exact path='/reviews/:reviewId' component={ReviewsShowContainer} />
        <ProtectedRoute exact path='/thepub' component={AllReviewsContainer} />
        <ProtectedRoute exact path='/home' component={AllReviewsContainer} />
        <Route render={() => <Redirect to='/drinks'/>} />
    </Switch>
    </>
);

export default App;