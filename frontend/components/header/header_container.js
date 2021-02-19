import React from 'react';
import { connect } from 'react-redux';
import Header from './header';

import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = state => ({

    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUser())
});

export default connect(
    mapStateToProps, mapDispatchToProps
    )(Header);