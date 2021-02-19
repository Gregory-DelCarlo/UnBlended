import React from 'react';
import {Link } from 'react-router-dom';

export default class DrinkForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.drink;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();

        this.props.submitDrink(this.state);
    }


    update(prop){
        return e => this.setState({ [prop]: e.currentTarget.value });
    }

    render() {
        return(
            <>
                <Link to='/drinks'>All Drinks!</Link><br/>
                <form onSubmit={this.handleSubmit}>
                    <div>{this.props.formType}</div>
                    <label>Name
                        <input type='name' value={this.state.name}  onChange={this.update('name')}/>
                    </label>
                    <label>Description
                        <input type='text' value={this.state.description} onChange={this.update('description')}/>
                    </label>
                    <button type="submit" value={this.props.formType} >{this.props.formType} </button>
                </form>
            </>
        );
    }
}