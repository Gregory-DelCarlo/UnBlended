import React from 'react';
import { Link } from 'react-router-dom';

export default class DrinksIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.selectItems = this.selectItems.bind(this);
        this.selectInfo = this.selectInfo.bind(this);
        this.selectAlt = this.selectAlt.bind(this);
    }

    selectItems() {
        const {item} = this.props;
        if (this.props.type === 'drinks') {
            return (<div className='drink-details'>
                        <Link to={`/drinks/${item.id}`} className='link' >
                            <p id='name'>{item.name}</p>
                        </Link>
                        <p id='dist'>{this.props.distillery}</p>
                        <p id='type' style={{color: 'grey'}}>{item.type}</p>
                    </div>)
        } else if (this.props.type === 'distilleries') {
            return (<div className='drink-details'>
                        <Link to={`/distilleries/${item.id}`} className='link' >
                            <p id='name'>{item.name}</p>
                        </Link>
                        <p id='city'>{item.city}</p>
                        <p id='state' style={{color: 'grey'}}>{item.state}</p>
                    </div>)
        }
    }

    selectInfo() {
        const {item, rating} = this.props;
        if (this.props.type === 'drinks') {
            return (<div className='drink-info'>
                        <div className='drink-percents'>
                            <p id='abv'>{item.abv}% ABV</p>
                            <p id='proof'>{item.proof} proof</p>
                        </div><br/>
                        <div className='drink-rating'> 
                            <p id='rating'>{rating} stars</p>
                        </div>
                    </div>)
        } else if (this.props.type === 'distilleries') {
            return (<div className='drink-info'>
                        <div className='drink-percents'>
                            <p id='whiskey'>{item.whiskeys.length} Whiskeys</p>
                            <p id='total'>4 ratings</p>
                        </div><br/>
                        <div className='drink-rating'> 
                            <p id='rating'>Rating</p>
                        </div>
                    </div>)
        }
    }

    // this will eventually send the render method two different links once distillery routes are set up
    selectAlt() {
        const {item} = this.props;

        if(this.props.type === 'drinks') {
            return (<div className='drink-img-container'>
                        <img src={item.photo} alt='drink image'/>
                    </div>)
        }else if(this.props.type === 'distilleries') {
            return (<div className='drink-img-container'>
                        <img src={item.photo} alt='distillery image'/>
                    </div>)
        }
    }

    render() {
        const {item} = this.props;
        return (
            <div className='drinks-index'>
                <Link to={`/drinks/${item.id}`} className='link' >
                    {this.selectAlt()}
                </Link>
                <li className='drinks-item'>
                    {this.selectItems()}
                    {this.selectInfo()}    
                </li>
            </div>
        )
    }
}