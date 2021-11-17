import React from "react";
import List from './List'
export default class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {basketContent: []}
    }
    addToBasket = (item) => {
        this.setState(prevState => ({basketContent: [...prevState.basketContent, item] }) );
    }
    removeFromBasket = (item) => {
        this.setState(prevState => ({basketContent: prevState.basketContent.filter(listItem => {
            return listItem !== item;
        })}))
    }

    render() {
        const groceries = ['Strawberry', 'Blueberry', 'Orange', 'Banana', 'Apple', 'Carrot', 'Celery', 'Mushroom', 'Green', 'Pepper', 'Eggs', 'Cheese', 'Butter', 'Chicken', 'Beef', 'Pork', 'Fish', 'Rice', 'Pasta', 'Bread'];
        return (
            <div id="content">
                {/* search box */}
                <List title='Groceries' items={groceries}
                    sign='+' clickFunc={this.addToBasket} />
                    
                <List title='Basket' items={this.state.basketContent}
                    sign='-' clickFunc={this.removeFromBasket} />
            </div>
        )
    }
}