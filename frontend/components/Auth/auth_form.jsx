import React from 'react';

export default class AuthForm extends React.Component {

    constructor(props) {
        super(props);
        const {formType, Submit} = this.props;
        this.formType = formType;
        this.submit = Submit;
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

    render() {
        return(
            <div className='auth-form'>
                <h2>{this.formType}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input type='text'
                            value={this.state.username}
                            onChange={this.update("username")}
                        />
                    </label><br />
                    <label>Password:
                        <input type='password'
                            value={this.state.password}
                            onChange={this.update("password")}
                        />
                    </label><br />
                    {this.formType === 'Sign Up' ?
                        <label>Location:
                            <input type='text'
                                value={this.state.location}
                                onChange={this.update("location")}
                            />
                        </label> : undefined
                    }<br />
                    { this.props.errors ? <div>{this.props.errors}</div> : undefined }
                    <button type="submit" >{this.formType}</button>
                </form>
            </div>
        )
    }

}