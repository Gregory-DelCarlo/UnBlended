import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import SignInContainer from './Auth/login_container';
import SignUpContainer from './Auth/signup_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';


const App = () => (
    <>
    <Switch>
        <Route exact path="/" component={HeaderContainer} />
        <AuthRoute path='/login' component={SignInContainer} />
        <AuthRoute path='/signup' component={SignUpContainer} />
        <Route render={() => <Redirect to='/'/>} />
    </Switch>
    </>
);

export default App;