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
            return Object.values(this.props.drinks).map( drink => (
                <DrinksIndexItem
                    key={drink.id}
                    item={drink}
                    type={listType}
                    distillery={this.props.distilleries[drink.distillery].name}
                />
                ));
        } else if (listType === 'distilleries') {
            return Object.values(this.props.distilleries).map( distillery => (
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
        } else if (e.currentTarget.innerText === 'Distilleries') {
            this.setState({list: this.selectList('distilleries'),
                           whiskeySelected: false,
                           distilleriesSelected: true
                        });
        }
    }

    render()  {
        const {distilleries, drinks} = this.props;
        if ((distilleries && this.state.distilleriesSelected) || (drinks && this.state.whiskeySelected)) {
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
                                Distilleries
                            </div>
                        </div>
                        <ul className='drinks-list'>
                            {this.state.list.length !== 0 ? this.state.list : this.selectList('drinks') }
                            <div className='new-drink-redirect'>
                                <p>Don't see the drink you're looking for?</p>
                                <Link to='/drinks/new' >You can add it here</Link>
                            </div>
                        </ul>
                    </div>
                </div>
            )
        } else if (!drinks && this.state.whiskeySelected) {
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
                            Distilleries
                        </div>
                    </div>
                    <ul className='drinks-list'>
                        Getting drinks...
                        <div className='new-drink-redirect'>
                            <p>Don't see the drink you're looking for?</p>
                            <Link to='/drinks/new' >You can add it here</Link>
                        </div>
                    </ul>
                </div>
            </div>
        } else if(!distilleries && this.state.distilleriesSelected) {
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
                            Distilleries
                        </div>
                    </div>
                    <ul className='drinks-list'>
                        Getting distilleries...
                        <div className='new-drink-redirect'>
                            <p>Don't see the distillery you're looking for?</p>
                            <Link to='/drinks/new' >You can add it here</Link>
                        </div>
                    </ul>
                </div>
            </div>
        }
    }
} 
