import React from "react";
import BasketItem from './BasketItem';

export default class BasketList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
        }
    }
    componentDidUpdate(_, prevState) {
        if(this.props.items.length !== prevState.items.length) {
            this.setState({items: this.props.items});
        }
    }
    emptyBasket = () => {
        console.log('?');
        this.setState({items: []});
    }
    render() {
        return (
            <div id='basket' className='lists'>
                <span><strong>🛒 Basket</strong></span>
                <button id='trash' onClick={this.emptyBasket}>🗑️</button>
                <ul className='uLists'>
                    {this.props.items.map(item => 
                        <BasketItem content={item} clickFunc={this.props.clickFunc} />)}
                </ul>

            </div>
        )
    }
}