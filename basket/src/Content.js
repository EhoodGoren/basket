import React from "react";
import List from './List'
export default class Content extends React.Component {
    render() {
        const groceries = ['Strawberry', 'Blueberry', 'Orange', 'Banana', 'Apple', 'Carrot', 'Celery', 'Mushroom', 'Green', 'Pepper', 'Eggs', 'Cheese', 'Butter', 'Chicken', 'Beef', 'Pork', 'Fish', 'Rice', 'Pasta', 'Bread'];
        return (
            <div id="content">
                {/* search box */}
                <List title='Groceries' items={groceries} />
                <List title='Basket' />
            </div>
        )
    }
}