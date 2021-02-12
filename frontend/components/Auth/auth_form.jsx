import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaGlobeAmericas } from 'react-icons/fa';

export default class AuthForm extends React.Component {

    constructor(props) {
        super(props);
        const {formType, submit} = this.props;
        this.formType = formType;
        this.submit = submit;
        if (this.formType === 'Sign Up') {
            this.state = {
                username: '',
                password: '',
                location: ''
            }
        } else {
            this.state = {
                username: '',
                password: ''
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemo = this.loginDemo.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    handleSubmit(e) {
        e.preventDefault()
        this.formType === 'Sign Up' ? this.submit(this.state)
            .then( () => this.props.history.push('/signup'))
        : this.submit(this.state)
            .then( () => this.props.history.push('/login'))


        if (this.formType === 'Sign Up') {
            this.setState ({
                username: '',
                password: '',
                location: ''
            })
        } else {
            this.setState ({
                username: '',
                password: ''
            })
        }
    }

    update(field) {
        return e => this.setState({
             [field]: e.currentTarget.value
        });
    }

    renderErrors() {
        return(
            <ul className='errors-list'>
                {this.props.errors.map((error, i) => (
                    <>
                    <li className='error-message' key={i.toString()}>
                        {error}
                    </li><br/>
                    </>
                ))}
            </ul>
        );
    }

    redirect() {
        let redirect = '';
        this.formType === 'Sign Up' ? redirect = (
            <div className='form-footer'>
                Already have an account? <Link to='/login' className='link' >Login Now</Link>
            </div>
        ) : redirect = (
            <div className='form-footer'>
                New to UnBlended? <Link to='/signup' className='link' >Sign Up!</Link>
            </div>
        )
        
        return redirect;
    }

    loginDemo(e) {
        e.preventDefault();
        e.stopPropagation();
        // this.formType === 'Sign Up' ? 
        //     delete this.state.location : undefined;

        const demoUser = ({
            username: "Chad",
            password: "supersecretpassword!"
        })

        // debugger
        this.formType === 'Sign Up' ? 
            this.props.loginUser(demoUser)
                .then( () => this.props.history.push('/login'))
        : this.submit(demoUser)
            .then( () => this.props.history.push("/login"));
    }

    renderFormContent() {
        return (
            <>
                <div className='field-content'><AiOutlineUser className="auth-icon"/>
                    <input type='text'
                        value={this.state.username}
                        onChange={this.update("username")}
                        placeholder='Username'
                    />
                </div><br/>
                <div className='field-content'><RiLockPasswordFill className="auth-icon"/>
                    <input type='password'
                        value={this.state.password}
                        onChange={this.update("password")}
                        placeholder='Password'
                    />
                </div><br />
                {this.formType === 'Sign Up' ?
                    <div className='field-content location'><FaGlobeAmericas className="auth-icon"/>
                        <input type='text'
                            value={this.state.location}
                            onChange={this.update("location")}
                            placeholder='Location'
                        />
                    </div> : undefined
                }<br />
            </>
        )
    }

    render() {
        return(
            <div className="auth-page">
                <div className='auth-form'>
                    <h2 id='home-link'><Link to='/' className='link'>UNBLENDED</Link></h2>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderFormContent()}
                        {this.renderErrors()}
                        <button className='form-button submit' type="submit" >{this.formType}</button>
                    </form>
                    <button className='form-button' onClick={this.loginDemo} >Demo a User</button>
                    <div className='long-grey-line' />
                    {this.redirect()}
                </div>
            </div>
        )
    }

}