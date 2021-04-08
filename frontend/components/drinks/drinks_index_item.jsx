import React from 'react';
import { Link } from 'react-router-dom';

export default class DrinksIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.selectItems = this.selectItems.bind(this);
        this.seclectInfo = this.selectInfo.bind(this);
    }

    selectItems(item) {

        if (this.props.type === 'drinks') {
            return (<div className='drink-details'>
                        <Link to={`/drinks/${item.id}`} className='link' >
                            <p id='name'>{item.name}</p>
                        </Link>
                        <p id='dist'>Distillery!</p>
                        <p id='type' style={{color: 'grey'}}>type: {item.type}</p>
                    </div>)
        }
    }

    selectInfo(item) {

        if (this.props.type === 'drinks') {
            return (<div className='drink-info'>
                        <div className='drink-percents'>
                            <p id='abv'>{item.abv}% ABV</p>
                            <p id='proof'>{item.proof} proof</p>
                        </div><br/>
                        <div className='drink-rating'> 
                            <p id='rating'>Rating</p>
                        </div>
                    </div>)
        }
    }

    render() {
        const {item} = this.props;
        return (
            <div className='drinks-index'>
                <Link to={`/drinks/${item.id}`} className='link' >
                    <div className='drink-img-container'>
                        <img src={item.photo} alt='drink image'/>
                    </div>
                </Link>
                <li className='drinks-item'>
                    {this.selectItems(item)}
                    {this.selectInfo(item)}    
                </li>
            </div>
        )
    }
}