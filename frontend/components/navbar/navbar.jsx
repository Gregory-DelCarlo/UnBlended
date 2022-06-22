import React from 'react';
import { Link } from 'react-router-dom';
// use to make nav list actual links when ready

export default class Navbar extends React.Component {
    render () {
        return (
            <div className="navbar-container">
                <div className='navbar-items'>
                    <h1><Link to='/home'>UNBLENDED</Link></h1>
                    <ul className='nav-list'>
                        <li><Link to='/thepub'>The Pub</Link></li>
                        <li><Link to='/drinks'>All Drinks</Link></li>
                        <li><Link to='/'>Home</Link></li>
                    </ul>
                    {/* <div className='profile-icon' >
                        
                    </div> */}
                </div>
            </div>
        )}
}