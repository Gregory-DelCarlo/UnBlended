import React from 'react';
import { Link } from 'react-router-dom';
import DrinksIndexItem from './drinks_index_item';
import Navbar from '../navbar/navbar';

export default class DrinksIndex extends React.Component {

    constructor(props) {
        super(props);
        this.listType = 'drinks';
        this.selectList = this.selectList.bind(this);
    }

    componentDidMount() {
        this.props.getDrinks();
    }
    componentWillUnMount() {
        this.props.history.push('/drinks');
    }

    selectList() {
        let list = [];

        if (this.listType === 'drinks') {
            list = this.props.drinks.map( drink => (
                <DrinksIndexItem
                    key={drink.id}
                    item={drink}
                    type={this.listType}
                />
            ))
        } else if (this.listType === 'distilleries') {
            list = this.props.distilleries.map( distillery => (
                <DrinksIndexItem
                    key={distillery.id}
                    item={distillery}
                    type={this.listType}
                />
            ));
        }

        return list;
    }

    render()  {

        return (
            <div className='page'>
                <Navbar />
                <div className='drinks-box'>
                    <div className='drinks-list-selector'>
                        <div className='list-item'>
                            Whiskey
                        </div>
                        <div className='list-item'>
                            Distillery
                        </div>
                    </div>
                    <ul className='drinks-list'>
                        {this.selectList()}
                    </ul>
                    <Link className='link' to='/drinks/new' >Create a Drink! </Link>
                </div>
            </div>
        )
    }
} 
