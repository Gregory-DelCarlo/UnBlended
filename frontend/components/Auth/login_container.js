import { connect } from 'react-redux';
import AuthForm from './auth_form';
import {loginUser} from '../../actions/session/session_actions';

const mapStateToProps = state => ({
    formType: 'Log In',
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
    Submit: (formUser) => dispatch(loginUser(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);