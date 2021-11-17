import React from "react";
import List from './List'
export default class Content extends React.Component {
    render() {
        const groceries = ['Strawberry', 'Blueberry', 'Orange', 'Banana', 'Apple', 'Carrot', 'Celery', 'Mushroom', 'Green', 'Pepper', 'Eggs', 'Cheese', 'Butter', 'Chicken', 'Beef', 'Pork', 'Fish', 'Rice', 'Pasta', 'Bread'];
        const basket = ['1','2','3']
        return (
            <div id="content">
                {/* search box */}
                <List title='Groceries' items={groceries} sign='+' />
                <List title='Basket' items={basket} sign='-' />
            </div>
        )
    }
}