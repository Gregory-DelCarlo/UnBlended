import React from 'react';
import { Link } from 'react-router-dom';

export default class DrinksShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componenetDidMount() {
        this.props.requestDrink();
    }

    render() {
        const { drink } = this.props;
        return(
            <div>
                <Link to='/drinks'>All Drinks</Link>
                <div>
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
                </div>
                <h2>DESCRIPTION</h2>
                <div>{drink.description}</div>
                <br />
                <button className='button'>Delete Drink</button>
            </div>
        )
    }
}