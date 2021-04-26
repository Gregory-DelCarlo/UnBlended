import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar'

export default class DrinksShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.requestDrink();
    }

    render() {
        const { drink } = this.props;
        if (drink ) {
            return(
                <div className='page'>
                    <Navbar />
                    <div className='drinks-show'>
                        <div>
                            <p>{drink.name}</p>
                            <p>Distillery: </p> 
                            {/* add when distillery api is set up  */}
                            <p>Type: {drink.type}</p>
                        </div>
                        <div>
                            <p>ABV: {drink.abv}</p>
                            <p>Proof: {drink.proof}</p>
                        </div>
                        <div>{drink.description}</div>
                        <br />
                        <Link to={`/drinks/${drink.id}/edit`} >Edit Drink</Link>
                        <button className='button' onClick={this.props.deleteDrink}>Delete Drink</button>
                    </div>
                </div>
            )
        }

        return (<div className='page'>
            Drink not found.
        </div>)
    }
}