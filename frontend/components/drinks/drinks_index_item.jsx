import React from 'react';
import { Link } from 'react-router-dom';

export default class DrinksIndexItem extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const {drink} = this.props;

        return (
            <Link to={`/drinks/${drink.id}`} className='link' >
                <li className='drinks-item'>
                    <div>
                        <p>{drink.name}</p>
                        <p>{drink.type}</p>
                    </div>
                </li>
            </Link>
        )
    }
}