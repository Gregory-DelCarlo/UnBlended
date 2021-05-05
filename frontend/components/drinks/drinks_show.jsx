import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar'

export default class DrinksShow extends React.Component {
    constructor(props) {
        super(props);
        this.props.requestDrink();
        if (this.props.drink) {
            this.props.getDistillery(this.props.drink.distillery);
        }
    }

    render() {
        const { drink, distillery } = this.props;
        if (drink ) {
            return(
                <div className='page'>
                    <Navbar />
                    <div className='drinks-show'>
                        <div className='full-drink'>
                            <div id='top'>
                                <img src={drink.photo}></img>
                                <div>
                                <p id='name'>{drink.name}</p><br/>
                                <p id='distillery'>{distillery.name} </p><br/>
                                {/* add when distillery api is set up  */}
                                <p>{drink.type}</p>
                                </div>
                            </div>
                            <div id='info'>
                                <p>{drink.abv}% ABV</p>
                                <p>{drink.proof} Proof</p>
                                <p>rating %</p>
                                <p> total ratings </p>
                            </div>
                            <div id='description'>{drink.description}</div>
                        </div>
                        <br />
                        <div className='sidebar'>
                            <Link to={`/drinks/${drink.id}/edit`} >Edit Drink</Link><br/>
                            <button className='button' onClick={this.props.deleteDrink}>Delete Drink</button>
                        </div>
                    </div>
                </div>
            )
        }

        return (<div className='page'>
            Drink loading ...
        </div>)
    }
}