import React from 'react';
import { NavLink } from 'react-router-dom';


export default ({ currentUser, logout}) => {
    const loginState = currentUser ? (
        <div id='auth-float'>
            <p id='greeting'>Welcome, { currentUser.username }</p>
            <button className='btn-auth' onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div id='auth-float'>
            <NavLink className='btn-auth navlink' to='/login'>Log In</NavLink>
            <NavLink className='btn-auth navlink' to="/signup">Create An Account</NavLink>
        </div>
    );

    return(
        <header className="header">
            {/* change this to image once you have it */}
            <div className='auth-bar clearfix'>
                {loginState}
            </div>
            <div id="header-grid">
                <div id="header-grid-logo">
                    <div id="masthead-logo">
                        <img src={window.logo} alt="Unblended logo standin"/>
                    </div>
                    <div className='short-line'></div>
                    < h2>Discover and share your favorite whiskey</h2>
                </div>
                <div id="header-grid-masthead">
                    <img id="masthead-img" src={window.mastheadImg} alt="Unblended masthead"/>
                </div>
            </div>
        </header>
    );
} 