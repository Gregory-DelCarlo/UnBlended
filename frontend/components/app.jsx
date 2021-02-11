import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import SignInContainer from './Auth/login_container';
import SignUpContainer from './Auth/signup_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';


const App = () => (
    <>
    <Route path="/" component={HeaderContainer} />
    <div>hello boys!</div>
    <AuthRoute exact path='/login' component={SignInContainer} />
    <AuthRoute exact path='/signup' component={SignUpContainer} />
    </>
);

export default App;