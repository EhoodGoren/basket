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
    render() {
        return (
            <div id='basket' className='lists'>
                <div><strong>Basket</strong></div>
                <ul className='uLists'>
                    {this.props.items.map(item => 
                        <BasketItem content={item} clickFunc={this.props.clickFunc} />)}
                </ul>
            </div>
        )
    }
}