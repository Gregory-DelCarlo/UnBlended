import { connect } from 'react-redux';
import AuthForm from './auth_form';
import {loginUser, clearErrors} from '../../actions/session_actions';

const mapStateToProps = state => ({
    formType: 'Log In',
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
    submit: (formUser) => dispatch(loginUser(formUser)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);