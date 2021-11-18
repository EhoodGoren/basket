import React from "react";
// import List from './List';
import BasketList from './BasketList';
import GroceriesList from './GroceriesList';

export default class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {basketContent: []}
    }
    addToBasket = (item) => {
        if(this.state.basketContent.some(basketItem => {
            return basketItem.item === item
        })){
            const prevBasket = [...this.state.basketContent];
            const updatedBasket = prevBasket.map(basketItem => {
                return basketItem.item === item
                ? {item, count: basketItem.count + 1 }
                : basketItem;
            })
            this.setState({basketContent: updatedBasket});
        }
        else {
            this.setState(prevState => ({basketContent: [...prevState.basketContent, {item, count: 1}]}) );
        }
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
                <GroceriesList items={groceries} clickFunc={this.addToBasket}/>
                <BasketList items={this.state.basketContent} clickFunc={this.removeFromBasket} />
            </div>
        )
    }
}