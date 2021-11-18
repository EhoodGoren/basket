import React from "react";
import GroceriesItem from './GroceriesItem';

export default class GroceriesList extends React.Component {
    render() {
        return (
            <div id='groceries' className='lists'>
                <div><strong>Groceries</strong></div>
                <ul className='uLists'>
                    {this.props.items.map(item => 
                        <GroceriesItem content={item} clickFunc={this.props.clickFunc}/>)}
                </ul>
            </div>
        )
    }
}