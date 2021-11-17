import React from "react";
import List from './List'
export default class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {basketContent: []}
    }
    updateBasket = (item) => {
        this.setState(prevState => ({basketContent: [...prevState.basketContent, item] }) );
    }

    render() {
        const groceries = ['Strawberry', 'Blueberry', 'Orange', 'Banana', 'Apple', 'Carrot', 'Celery', 'Mushroom', 'Green', 'Pepper', 'Eggs', 'Cheese', 'Butter', 'Chicken', 'Beef', 'Pork', 'Fish', 'Rice', 'Pasta', 'Bread'];
        return (
            <div id="content">
                {/* search box */}
                <List title='Groceries' items={groceries} sign='+' clickFunc={this.updateBasket} />
                <List title='Basket' items={this.state.basketContent} sign='-' />
            </div>
        )
    }
}