import React from 'react';


export default class DrinkSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            drink: ''
        }
    }

    componentDidMount() {
        this.props.getDrinks();
    }

    similarDrinks() {
        //return a ul of all drinks that match the current string
    }

    handleChange(e) {
        this.setState({drink: e.target.innerHTML })
    }

    render() {
        return (
            <div className='search-bar'>
                <form>
                    <input 
                        type='text' 
                        placeholder='Find A Whiskey or Distillery...' 
                        className='search-input'
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}