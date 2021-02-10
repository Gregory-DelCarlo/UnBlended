import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ currentUser, logout}) => {
    const loginState = currentUser ? (
        <div>
            <p>Welcome, { currentUser.username }</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div>
            <NavLink className='btn' to="/signup">Sign Up</NavLink>
            <NavLink className='btn' to='/login'>Log In</NavLink>
        </div>
    );

    return(
        <header className="header">
            <h1 className="logo">UNTAPPED</h1>
            <div>
                {loginState}
            </div>
        </header>
    );
}