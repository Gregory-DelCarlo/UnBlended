import { connect } from 'react-redux';
import AuthForm from './auth_form';
import {createNewUser, clearErrors} from '../../actions/session/session_actions';

const mapStateToProps = state => ({
    formType: 'Sign Up',
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
    submit: (formUser) => dispatch(createNewUser(formUser)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);