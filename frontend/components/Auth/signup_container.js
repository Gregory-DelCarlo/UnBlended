import { connect } from 'react-redux';
import AuthForm from './auth_form';
import {createNewUser} from '../../actions/session/session_actions';

const mapStateToProps = () => ({
    formType: 'Sign Up'
});

const mapDispatchToProps = dispatch => ({
    signUp: (formUser) => dispatch(createNewUser(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);