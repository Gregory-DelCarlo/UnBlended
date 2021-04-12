import React from 'react';
import { Link } from 'react-router-dom';
import DrinksIndexItem from './drinks_index_item';
import Navbar from '../navbar/navbar';

export default class DrinksIndex extends React.Component {

    constructor(props) {
        super(props);
        this.selectList = this.selectList.bind(this);
        this.handleListChange = this.handleListChange.bind(this);
        this.state = {
            list: [],
            whiskeySelected: true,
            distilleriesSelected: false
        };
    }
    
    componentWillMount() {
        this.props.getDrinks();
        this.props.getDistilleries();
    }

    componentWillUnMount() {
        this.props.history.push('/drinks');
    }

    selectList(listType) {
        if (listType === 'drinks') {
            return this.props.drinks.map( drink => (
                <DrinksIndexItem
                    key={drink.id}
                    item={drink}
                    type={listType}
                />
                ));
        } else if (listType === 'distilleries') {
            return this.props.distilleries.map( distillery => (
                <DrinksIndexItem
                    key={distillery.id}
                    item={distillery}
                    type={listType}
                />
            ));
        }
    }

    handleListChange(e) {
        if (e.currentTarget.innerText === 'Whiskey') {
            this.setState({list: this.selectList('drinks'),
                           whiskeySelected: true,
                           distilleriesSelected: false
                        });
        } else if (e.currentTarget.innerText === 'Distillery') {
            this.setState({list: this.selectList('distilleries'),
                           whiskeySelected: false,
                           distilleriesSelected: true
                        });
        }
    }

    render()  {
        return (
            <div className='page'>
                <Navbar />
                <div className='drinks-box'>
                    <div className='drinks-list-selector'>
                        <div 
                            onClick={this.handleListChange} 
                            className='list-item'
                            className={this.state.whiskeySelected ? 'selected' : '' }
                        >
                            Whiskey
                        </div>
                        <div 
                            onClick={this.handleListChange} 
                            className='list-item'
                            className={this.state.distilleriesSelected ? 'selected' : ''}
                        >
                            Distillery
                        </div>
                    </div>
                    <ul className='drinks-list'>
                        {this.state.list.length !== 0 ? this.state.list : this.selectList('drinks') }
                    </ul>
                    <Link className='link' to='/drinks/new' >Create a Drink! </Link>
                </div>
            </div>
        )
    }
} 
