import React from 'react';
import {Link } from 'react-router-dom';
import NavBar from '../navbar/navbar';

export default class DrinkForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state =  this.props.drink ? this.props.drink : {
            name: '',
            type: '',
            abv: 40,
            proof: 80,
            description: '',
            distillery_id: 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.typeList = this.typeList.bind(this);
        this.distilleryList = this.distilleryList.bind(this);
        this.props.getDistilleries();
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.submitDrink(this.state)
        .then( () => {
            if (this.props.formType === 'Create Drink') {
                return this.props.history.push('/drinks/new');
            } else {
                return this.props.history.push(`/drinks/${this.state.id}/edit`);
            }
        });
    }


    update(prop){
        return e => this.setState({ [prop]: e.currentTarget.value });
    }

    distilleryList() {
        let distilleries = this.props.distilleries.map(distillery => {
            return <option key={distillery.id} value={distillery.id}>{distillery.name}</option>
        });

        return(<select name='distList' onChange={this.update('distillery_id')} >
                    <option value=''>Select a Distillery</option>
                    {distilleries}
               </select>)
    }

    typeList() {
        return (<select name='typeList' onChange={this.update('type')}>
                    <option value=''>Select The Type of Whiskey</option>
                    <option value='Scotch'>Scotch</option>
                    <option value='Bourbon'>Bourbon</option>
                    <option value='Rye Whiskey'>Rye Whiskey</option>
                    <option value='Single-Malt Whiskey'>Single-Malt Whiskey</option>
                    <option value='Blended Scotch'>Blended Scotch</option>
                    <option value='Malt Whiskey'>Malt Whiskey</option>
                    <option value='Tennessee Bourbon'>Tennessee Bourbon</option>
                    <option value='Bottled in Bond'>Bottled in Bond</option>
                    <option value='Single-Malt Irish Whiskey'>Single-Malt Irish Whiskey</option>
                    <option value='Blended Irish Whiskey'>Blended Irish Whiskey</option>
                    <option value='Canadian Whiskey'>Canadian Whiskey</option>
                    <option value='Japanese Whisky'>Japanese Whisky</option>
                </select>)
    }

    render() {
        return(
            <div className='page'>
                <NavBar />
                <div className='drinks-box'>
                    <form onSubmit={this.handleSubmit} className='drinks-form'>
                        <div id='title'>
                            <h1>{this.props.formType}</h1>
                            <p>Did you notice something incorrect with the details of this beer? Help us out by editing it here. Once you're changes are verified you will see the updates on your drinks' page.</p>
                        </div>
                        <label id='name'>Name<br/>
                            <input type='name' value={this.state.name}  onChange={this.update('name')}/>
                        </label>
                        <label id='distillery'>Distillery<br/>
                            {this.distilleryList()}
                        </label>
                        <div id='drink-details'>
                            <label id='abv'>ABV<br/>
                                <input type='number' value={this.state.abv} min='40' max='80' onChange={this.update('abv')}/>
                            </label>
                            <label id='proof'>Proof<br/>
                                <input type='number' value={this.state.proof} min='80' max='160' onChange={this.update('proof')}/>
                            </label>
                            <label id='type'>Type<br/>
                                {this.typeList()}
                            </label>
                        </div>
                        <label id='description'>Description<br />
                            <textarea type='text' value={this.state.description} onChange={this.update('description')}/>
                        </label>
                        <button type="submit" value={this.props.formType} >{this.props.formType} </button>
                    </form>
                </div>
            </div>
        );
    }
}