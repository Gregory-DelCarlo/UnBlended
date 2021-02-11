import React from 'react';
import { NavLink } from 'react-router-dom';
// import mastheadImg from '../../../app/assets/images/header/masthead-img-main.png';
// import img from '../../../app/assets/images/header/masthead-img-main'
// import img from 'app/assets/images/header/masthead-img-main.png';

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
            <div>
                <h1 className="logo">UNBLENDED</h1>
                <div id='header-line'></div>
                < h2>Discover and share your favorite whiskey</h2>
                {/* <img src={img} alt="Unblended masthead"/> */}
            </div>
        </header>
    );
} 