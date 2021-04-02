import React from 'react';
import { Link } from 'react-router-dom';

export default class DrinksIndexItem extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const {drink} = this.props;
        return (
            <Link to={`/drinks/${drink.id}`} className='link drinks-index' >
                <img src={drink.photo} alt='drink image'/>
                <li className='drinks-item'>
                    <div className='drink-details'>
                        <p id='name'>{drink.name}</p>
                        <p id='dist'>Distillery!</p>
                        <p id='type'>type: {drink.type}</p>
                    </div>
                    <div className='drink-info'>
                        <div className='drink-percents'>
                            <p id='abv'>{drink.abv}% ABV</p>
                            <p id='proof'>{drink.proof} proof</p>
                        </div><br/>
                        <div className='drink-rating'>
                            <p id='rating'>Rating</p>
                        </div>
                    </div>
                </li>
            </Link>
        )
    }
}